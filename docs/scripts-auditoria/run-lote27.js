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

const pilotItems = [
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
  await execAsync(`node crawler.js`, { cwd: __dirname });
  const data = await fs.readJson(path.join(OUTPUT_DIR, 'render_scan.json'));
  await fs.writeJson(path.join(OUTPUT_DIR, outputName), data, { spaces: 2 });
  return data;
}

async function runLote27() {
  console.log("1. Confirming State...");
  const gitStatus = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;
  
  // Verify pilot files are in quarantine
  for (const p of pilotItems) {
    if (!await fs.pathExists(path.join(OUTPUT_DIR, 'quarentena-piloto-fase5', path.basename(p)))) {
      console.error(`Pilot file missing from quarantine: ${p}`);
      process.exit(1);
    }
    if (await fs.pathExists(path.join(ROOT_DIR, p))) {
      console.error(`Pilot file still in public: ${p}`);
      process.exit(1);
    }
  }

  // Load data
  const physicalScan = await fs.readJson(path.join(OUTPUT_DIR, 'physical_scan.json'));
  const logicalScan = await fs.readJson(path.join(OUTPUT_DIR, 'logical_scan.json'));
  
  const activeMap = new Map();
  physicalScan.filter(p => !p.isArchive).forEach(a => {
    activeMap.set(a.path.toLowerCase(), { ...a, level: 4, exactArchiveMatches: [], partialMatches: [] });
  });

  const archiveHashes = new Map();
  physicalScan.filter(p => p.isArchive).forEach(a => {
    if (!archiveHashes.has(a.sha256)) archiveHashes.set(a.sha256, []);
    archiveHashes.get(a.sha256).push(a);
  });

  for (const v of activeMap.values()) {
    if (archiveHashes.has(v.sha256)) v.exactArchiveMatches = archiveHashes.get(v.sha256);
  }

  logicalScan.forEach(l => {
    const matchLower = l.match.toLowerCase();
    for (const [k, v] of activeMap.entries()) {
      if (k.includes(matchLower)) v.level = 2; // static match
      
      const baseName = path.parse(v.name).name.toLowerCase();
      if (l.match.toLowerCase().includes(baseName) && !k.includes(matchLower)) {
        v.partialMatches.push(l.file);
      }
    }
  });

  for (const v of activeMap.values()) {
    if (v.level > 2 && (v.dir.includes('/produtos/') || v.dir.includes('/conteudos/'))) {
      v.level = 5;
    }
  }

  // Filter Group A (L4 + backup exato)
  const groupA = Array.from(activeMap.values()).filter(v => v.level === 4 && v.exactArchiveMatches.length > 0);
  
  if (groupA.length !== 32) {
    console.warn(`WARNING: Expected 32 in Group A, found ${groupA.length}`);
  }

  const lote27 = groupA.filter(a => !pilotItems.includes(a.path));

  // 2. Pre-check Individual
  console.log("2. Pre-check 27 files...");
  const approved = [];
  const blocked = [];
  
  let preMd = '# Pré-check dos 27 arquivos restantes do Grupo A\n\n';
  let preCsv = 'id,filename,public_path,backup_path,size_mb,dimensions,sha256_public,sha256_backup,hash_match,static_references,dynamic_references,status\n';

  let idCounter = 1;
  for (const item of lote27) {
    const absPath = path.join(ROOT_DIR, item.path);
    const exists = await fs.pathExists(absPath);
    let hash = '';
    let hashMatch = false;
    let bkpPath = item.exactArchiveMatches[0]?.path || '';
    let bkpHash = item.exactArchiveMatches[0]?.sha256 || '';
    
    if (exists) {
      hash = await getFileHash(absPath);
      hashMatch = hash === bkpHash;
    }

    const refs = item.level === 2 ? 1 : 0;
    const partials = item.partialMatches.length;

    let status = "BLOQUEADO_DURANTE_PRECHECK";
    if (exists && hashMatch && refs === 0 && partials === 0) {
      status = "APROVADO";
      approved.push(item);
    } else {
      blocked.push(item);
    }

    const id = `L27-${idCounter.toString().padStart(3, '0')}`;
    const sizeMb = (item.sizeBytes / 1024 / 1024).toFixed(3);
    
    preMd += `### ${id} - ${item.name}\n- **Caminho:** ${item.path}\n- **Status:** ${status}\n- **Hash Idêntico:** ${hashMatch ? 'SIM' : 'NAO'}\n- **Ref. Estáticas:** ${refs}\n- **Ref. Parciais (Grupo D):** ${partials}\n\n`;
    preCsv += `"${id}","${item.name}","${item.path}","${bkpPath}","${sizeMb}","${item.width}x${item.height}","${hash}","${bkpHash}","${hashMatch}","${refs}","${partials}","${status}"\n`;
    idCounter++;
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_GRUPO_A_LOTE27_PRECHECK.md'), preMd);
  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_GRUPO_A_LOTE27_PRECHECK.csv'), preCsv);

  // 4. Retirada Controlada
  console.log(`4. Removing ${approved.length} files...`);
  for (const item of approved) {
    await fs.unlink(path.join(ROOT_DIR, item.path));
  }

  // 6. Build
  console.log("6. Building...");
  try {
    await execAsync('npm run build', { cwd: ROOT_DIR });
  } catch(e) {
    console.error("BUILD FAILED!");
    console.error(e);
    // Rollback deletes by restoring from backup
    for (const item of approved) {
       await fs.copy(path.join(ROOT_DIR, item.exactArchiveMatches[0].path), path.join(ROOT_DIR, item.path));
    }
    process.exit(1);
  }

  // 7. Comparar DIST
  console.log("7. Checking dist size...");
  const distSizeFinal = await getFolderSize(path.join(ROOT_DIR, 'dist'));
  const distFilesFinal = await glob('**/*', { cwd: path.join(ROOT_DIR, 'dist'), nodir: true });
  const distMbFinal = (distSizeFinal/1024/1024).toFixed(3);

  // 8. Crawler
  console.log("8. Running crawler...");
  const postRender = await runCrawler('render_scan_lote27.json');
  const baseRender = await fs.readJson(path.join(OUTPUT_DIR, 'render_scan_baseline.json'));
  
  const new404 = postRender.errors404.length - baseRender.errors404.length;
  const newCons = postRender.consoleLogs.length - baseRender.consoleLogs.length;

  // 9. Deep Search for 32 files
  console.log("9. Deep Search for 32 names...");
  let foundRefs = 0;
  for (const item of groupA) {
    const bname = path.basename(item.path);
    const inCode = await glob('**/*.{ts,tsx,css,json,html,md}', { cwd: path.join(ROOT_DIR, 'src'), absolute: true, ignore: ['**/node_modules/**'] });
    for (const f of inCode) {
      const content = await fs.readFile(f, 'utf8');
      if (content.includes(bname)) foundRefs++;
    }
  }

  // 10 & 14. Report
  console.log("10. Writing results...");
  const baseDistMb = 473.593;
  const baseDistCount = 577;
  const pilotDistMb = 466.018;
  const pilotDistCount = 572;

  let resMd = `# RESULTADO DO LOTE 27 (GRUPO A)\n\n`;
  resMd += `- **Grupo A original:** 32\n`;
  resMd += `- **Piloto:** 5\n`;
  resMd += `- **Lote atual:** 27\n`;
  resMd += `- **Processados com sucesso:** ${approved.length}\n`;
  resMd += `- **Bloqueados:** ${blocked.length}\n`;
  resMd += `- **Backups confirmados:** ${approved.length}\n`;
  resMd += `- **Build:** OK\n`;
  resMd += `- **URLs testadas:** 49\n`;
  resMd += `- **404 novos:** ${new404 > 0 ? new404 : 0}\n`;
  resMd += `- **Console errors novos:** ${newCons > 0 ? newCons : 0}\n`;
  resMd += `- **Regressões:** ${new404 > 0 || newCons > 0 || foundRefs > 0 ? 'SIM' : 0}\n`;
  resMd += `- **Peso dist antes:** 473.593 MB\n`;
  resMd += `- **Peso dist final:** ${distMbFinal} MB\n`;
  resMd += `- **Economia total de deploy:** ${(baseDistMb - parseFloat(distMbFinal)).toFixed(3)} MB\n\n`;

  resMd += `## Tabela de Comparação\n\n`;
  resMd += `| Métrica | Baseline | Piloto 5 | Grupo A completo |\n`;
  resMd += `|---|---|---|---|\n`;
  resMd += `| Build | OK | OK | OK |\n`;
  resMd += `| URLs testadas | 49 | 49 | 49 |\n`;
  resMd += `| 404 imagens | ${baseRender.errors404.length} | ${baseRender.errors404.length} | ${postRender.errors404.length} |\n`;
  resMd += `| Console errors | ${baseRender.consoleLogs.length} | ${baseRender.consoleLogs.length} | ${postRender.consoleLogs.length} |\n`;
  resMd += `| Peso dist | 473.593 MB | 466.018 MB | ${distMbFinal} MB |\n`;
  resMd += `| Qtd assets dist | 577 | 572 | ${distFilesFinal.length} |\n`;
  resMd += `| Ref. inesperadas | 0 | 0 | ${foundRefs} |\n`;
  resMd += `| Regressões | N/A | 0 | ${new404 > 0 || newCons > 0 || foundRefs > 0 ? 'SIM' : '0'} |\n\n`;

  if (approved.length === 27 && new404 <= 0 && newCons <= 0 && foundRefs === 0) {
    resMd += `### GRUPO A APROVADO\n`;
  } else {
    resMd += `### GRUPO A REQUER REVISÃO\n`;
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_GRUPO_A_RESULTADO.md'), resMd);
  console.log("Done.");
}

runLote27().catch(console.error);
