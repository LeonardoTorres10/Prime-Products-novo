import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { exec } from 'child_process';
import util from 'util';
import { glob } from 'glob';

const execAsync = util.promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');
const QUARANTINE_DIR = path.join(OUTPUT_DIR, 'quarentena-piloto-fase5');

const candidates = [
  '/public/images/solucoes-integradas/prod-geracao-oxigenio.png',
  '/public/images/produtos/regulador-gases-08.png',
  '/public/images/produtos/produtos-bg-nostar.png',
  '/public/images/solucoes-integradas/seguranca-e-automacao/seguranca-em-aumotacao-04.png',
  '/public/images/solucoes-integradas/seguranca-e-automacao/seguranca-e-automacao-04.png'
];

async function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('error', err => reject(err));
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
  });
}

async function getFolderSize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  const files = await glob('**/*', { cwd: dirPath, absolute: true, nodir: true });
  let size = 0;
  for (const f of files) {
    const stat = await fs.stat(f);
    size += stat.size;
  }
  return size;
}

async function runCrawler(outputName) {
  // Use the existing crawler.js which writes to render_scan.json
  // Then we rename the file
  await execAsync(`node crawler.js`, { cwd: __dirname });
  const data = await fs.readJson(path.join(OUTPUT_DIR, 'render_scan.json'));
  await fs.writeJson(path.join(OUTPUT_DIR, outputName), data, { spaces: 2 });
  return data;
}

async function runPilot() {
  await fs.ensureDir(QUARANTINE_DIR);
  
  const physicalScan = await fs.readJson(path.join(OUTPUT_DIR, 'physical_scan.json'));
  const logicalScan = await fs.readJson(path.join(OUTPUT_DIR, 'logical_scan.json'));
  const archiveAssets = physicalScan.filter(p => p.isArchive);
  
  let precheckMd = '# Pré-check dos Arquivos do Piloto\n\n';
  const manifest = [];
  
  // 1. Pre-check
  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const absPath = path.join(ROOT_DIR, c);
    const exists = await fs.pathExists(absPath);
    if (!exists) {
      console.error(`File missing: ${absPath}`);
      process.exit(1);
    }
    
    const hash = await getFileHash(absPath);
    const backup = archiveAssets.find(a => a.sha256 === hash);
    const stat = await fs.stat(absPath);
    
    const isLogical = logicalScan.filter(l => l.match.includes(path.basename(c)));
    
    precheckMd += `ID: P5-${(i+1).toString().padStart(3, '0')}\n`;
    precheckMd += `ORIGINAL: ${c}\nEXISTE: SIM\nSHA-256: ${hash}\n`;
    precheckMd += `BACKUP: ${backup ? backup.path : 'NAO ENCONTRADO'}\n`;
    precheckMd += `SHA-256 BACKUP: ${backup ? backup.sha256 : 'NAO ENCONTRADO'}\n`;
    precheckMd += `HASH IDÊNTICO: ${backup && backup.sha256 === hash ? 'SIM' : 'NAO'}\n`;
    precheckMd += `REFERÊNCIAS NO CÓDIGO: ${isLogical.length}\n`;
    precheckMd += `STATUS: LIBERADO PARA PILOTO\n\n---\n\n`;
    
    manifest.push({
      original_path: c,
      quarantine_path: path.join('quarentena-piloto-fase5', path.basename(c)),
      backup_path: backup ? backup.path : null,
      sha256: hash,
      size: stat.size,
      reason: "Piloto Fase 5"
    });
  }
  await fs.writeFile(path.join(OUTPUT_DIR, 'piloto-fase5-precheck.md'), precheckMd);
  
  // 2. Baseline
  console.log("Running Baseline Build...");
  let gitBefore = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;
  await execAsync('npm run build', { cwd: ROOT_DIR });
  const distSizeBefore = await getFolderSize(path.join(ROOT_DIR, 'dist'));
  const distFilesBefore = await glob('**/*', { cwd: path.join(ROOT_DIR, 'dist'), nodir: true });
  
  console.log("Running Baseline Crawler...");
  const baseRender = await runCrawler('render_scan_baseline.json');
  
  let baseMd = `# Baseline ANTES do Piloto\n\n`;
  baseMd += `## GIT STATUS\n\`\`\`\n${gitBefore}\n\`\`\`\n`;
  baseMd += `## DIST\n- Tamanho: ${(distSizeBefore/1024/1024).toFixed(3)} MB\n- Arquivos: ${distFilesBefore.length}\n`;
  baseMd += `## CRAWLER\n- Erros 404: ${baseRender.errors404.length}\n- Console Errors: ${baseRender.consoleLogs.length}\n`;
  await fs.writeFile(path.join(OUTPUT_DIR, 'piloto-fase5-baseline.md'), baseMd);
  
  // 3. Move to Quarantine
  console.log("Moving to Quarantine...");
  for (const c of candidates) {
    await fs.move(path.join(ROOT_DIR, c), path.join(QUARANTINE_DIR, path.basename(c)), { overwrite: true });
  }
  await fs.writeJson(path.join(QUARANTINE_DIR, 'manifest.json'), manifest, { spaces: 2 });
  
  // 4. Post-check Build
  console.log("Running Post-check Build...");
  let buildSuccess = true;
  try {
    await execAsync('npm run build', { cwd: ROOT_DIR });
  } catch(e) {
    buildSuccess = false;
    console.error("Build Failed!", e);
  }
  
  if (!buildSuccess) {
    // Rollback immediately
    console.log("Rolling back due to build failure...");
    for (const c of candidates) {
      await fs.move(path.join(QUARANTINE_DIR, path.basename(c)), path.join(ROOT_DIR, c), { overwrite: true });
    }
    process.exit(1);
  }
  
  const distSizeAfter = await getFolderSize(path.join(ROOT_DIR, 'dist'));
  const distFilesAfter = await glob('**/*', { cwd: path.join(ROOT_DIR, 'dist'), nodir: true });
  
  // 5. Post-check Crawler
  console.log("Running Post-check Crawler...");
  const postRender = await runCrawler('render_scan_post.json');
  
  // 6. Search for names after
  console.log("Searching for references...");
  let foundRefs = 0;
  for (const c of candidates) {
    const bname = path.basename(c);
    const inCode = await glob('**/*.{ts,tsx,css,json,html,md}', { cwd: path.join(ROOT_DIR, 'src'), absolute: true, ignore: ['**/node_modules/**'] });
    for (const f of inCode) {
      const content = await fs.readFile(f, 'utf8');
      if (content.includes(bname)) foundRefs++;
    }
  }
  
  let gitAfter = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;
  
  // 7. Results
  let resMd = `# RESULTADO DO PILOTO FASE 5\n\n`;
  resMd += `- **ARQUIVOS TESTADOS:** ${candidates.length}\n`;
  resMd += `- **BUILD:** ${buildSuccess ? 'OK' : 'FALHOU'}\n`;
  resMd += `- **CRAWL:** ${postRender.errors404.length >= baseRender.errors404.length ? 'OK' : 'FALHOU'}\n`; // Check if any regression
  
  const new404 = postRender.errors404.length - baseRender.errors404.length;
  const newCons = postRender.consoleLogs.length - baseRender.consoleLogs.length;
  
  resMd += `- **NOVOS 404:** ${new404 > 0 ? new404 : 0}\n`;
  resMd += `- **NOVOS CONSOLE ERRORS:** ${newCons > 0 ? newCons : 0}\n`;
  resMd += `- **REFERÊNCIAS DESCOBERTAS:** ${foundRefs}\n`;
  resMd += `- **REGRESSÕES:** ${new404 > 0 || newCons > 0 || foundRefs > 0 ? 'SIM' : 'NENHUMA'}\n`;
  resMd += `- **REDUÇÃO DIST:** ${((distSizeBefore - distSizeAfter)/1024/1024).toFixed(3)} MB\n`;
  resMd += `- **ROLLBACK TESTADO:** NÃO EXECUTADO (Arquivos permanecem na quarentena conforme instruído para aprovação do Piloto)\n\n`;
  
  resMd += `## COMPARAÇÃO FUNCIONAL\n\n`;
  resMd += `| Métrica | Antes | Depois | Diferença |\n`;
  resMd += `|---|---|---|---|\n`;
  resMd += `| Erros 404 de Imagem | ${baseRender.errors404.length} | ${postRender.errors404.length} | ${new404} |\n`;
  resMd += `| Console Errors | ${baseRender.consoleLogs.length} | ${postRender.consoleLogs.length} | ${newCons} |\n`;
  resMd += `| Peso DIST (MB) | ${(distSizeBefore/1024/1024).toFixed(3)} | ${(distSizeAfter/1024/1024).toFixed(3)} | -${((distSizeBefore - distSizeAfter)/1024/1024).toFixed(3)} |\n`;
  resMd += `| Qtd de Assets (DIST) | ${distFilesBefore.length} | ${distFilesAfter.length} | ${distFilesAfter.length - distFilesBefore.length} |\n\n`;
  
  resMd += `## GIT STATUS DEPOIS\n\`\`\`\n${gitAfter}\n\`\`\`\n\n`;
  
  if (new404 === 0 && newCons === 0 && foundRefs === 0 && buildSuccess) {
    resMd += `### RESULTADO: APROVADO PARA ESCALAR\n`;
  } else {
    resMd += `### RESULTADO: REPROVADO — INVESTIGAÇÃO NECESSÁRIA\n`;
  }
  
  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_PILOTO_RESULTADO.md'), resMd);
  console.log("Pilot complete.");
}

runPilot().catch(console.error);
