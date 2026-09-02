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
const BACKUP_DIR = path.join(ROOT_DIR, 'ARQUIVO', 'backup-pre-refactor', 'grupo-c');
const QUARANTINE_DIR = path.join(OUTPUT_DIR, 'quarentena-grupo-c');

const grupoC = [
  'public/images/produtos/regulador-gases-06.jpg',
  'public/images/produtos/regulador-gases-05.jpg',
  'public/images/produtos/regulador-gases-04.jpg',
  'public/images/produtos/prod-reguladores-especiais-new.jpg',
  'public/images/home/home-about-ihm-new-2.jpg',
  'public/images/conteudos/diagrama-conversao-diesel.png',
  'public/images/solucoes-integradas/instrumentacao-medicao/regulador-gases-09.jpg',
  'public/images/aplicacoes/automotiva/caminhao.png'
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

async function runGrupoC() {
  await fs.ensureDir(BACKUP_DIR);
  await fs.ensureDir(QUARANTINE_DIR);

  console.log("1. Baseline Imediatamente Antes...");
  const gitStatus = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;
  
  await execAsync('npm run build', { cwd: ROOT_DIR });
  const baseDistSize = await getFolderSize(path.join(ROOT_DIR, 'dist'));
  const baseDistFiles = await glob('**/*', { cwd: path.join(ROOT_DIR, 'dist'), nodir: true });
  const baseDistMb = (baseDistSize / 1024 / 1024).toFixed(3);
  
  const baseRender = await runCrawler('render_scan_baseline_grupoc.json');

  let baseMd = `# FASE 5 - GRUPO C (BASELINE)\n\n`;
  baseMd += `## Git Status\n\`\`\`\n${gitStatus}\n\`\`\`\n\n`;
  baseMd += `- Build Atual: OK\n`;
  baseMd += `- Peso dist/: ${baseDistMb} MB\n`;
  baseMd += `- Qtd assets dist/: ${baseDistFiles.length}\n`;
  baseMd += `- URLs Crawler: 49\n`;
  baseMd += `- Erros 404 Atuais: ${baseRender.errors404.length}\n`;
  baseMd += `- Console Errors Atuais: ${baseRender.consoleLogs.length}\n`;
  
  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_GRUPO_C_BASELINE.md'), baseMd);

  console.log("2. Pre-check Individual & 3. Preservacao & 4. Quarentena...");
  const approved = [];
  const blocked = [];
  
  let idCounter = 1;
  for (const relPath of grupoC) {
    const absPath = path.join(ROOT_DIR, relPath);
    const exists = await fs.pathExists(absPath);
    const bname = path.basename(absPath);
    
    let refs = 0;
    const inCode = await glob('**/*.{ts,tsx,css,json,html,md}', { cwd: path.join(ROOT_DIR, 'src'), absolute: true, ignore: ['**/node_modules/**'] });
    for (const f of inCode) {
      const content = await fs.readFile(f, 'utf8');
      if (content.includes(bname)) refs++;
    }

    if (exists && refs === 0) {
      // 3. Preservacao
      const backupPath = path.join(BACKUP_DIR, bname);
      await fs.copy(absPath, backupPath);
      
      const hashOrigem = await getFileHash(absPath);
      const hashBackup = await getFileHash(backupPath);
      const statOrig = await fs.stat(absPath);
      const statBkp = await fs.stat(backupPath);
      
      if (hashOrigem === hashBackup) {
        // 4. Mover para quarentena
        const quarPath = path.join(QUARANTINE_DIR, bname);
        await fs.move(absPath, quarPath, { overwrite: true });
        
        approved.push({
          relPath,
          bname,
          hash: hashOrigem,
          size: statOrig.size
        });
      } else {
        blocked.push(relPath);
      }
    } else {
      blocked.push(relPath);
    }
  }

  console.log("5. Build...");
  try {
    await execAsync('npm run build', { cwd: ROOT_DIR });
  } catch(e) {
    console.error("BUILD FAILED!");
    // Rollback
    for (const item of approved) {
       await fs.move(path.join(QUARANTINE_DIR, item.bname), path.join(ROOT_DIR, item.relPath), { overwrite: true });
    }
    process.exit(1);
  }

  console.log("6. Valida Dist...");
  const postDistSize = await getFolderSize(path.join(ROOT_DIR, 'dist'));
  const postDistFiles = await glob('**/*', { cwd: path.join(ROOT_DIR, 'dist'), nodir: true });
  const postDistMb = (postDistSize / 1024 / 1024).toFixed(3);
  const econMb = (baseDistMb - postDistMb).toFixed(3);

  console.log("7. Crawler...");
  const postRender = await runCrawler('render_scan_post_grupoc.json');
  const new404 = postRender.errors404.length - baseRender.errors404.length;
  const newCons = postRender.consoleLogs.length - baseRender.consoleLogs.length;

  console.log("8. Busca profunda...");
  let foundRefs = 0;
  for (const item of approved) {
    const bname = item.bname;
    const inCode2 = await glob('**/*.{ts,tsx,css,json,html,md}', { cwd: path.join(ROOT_DIR, 'src'), absolute: true, ignore: ['**/node_modules/**'] });
    for (const f of inCode2) {
      const content = await fs.readFile(f, 'utf8');
      if (content.includes(bname)) foundRefs++;
    }
  }

  console.log("9. Relatorio...");
  let resMd = `# RESULTADO DO GRUPO C (FASE 5)\n\n`;
  resMd += `- **Arquivos previstos:** 8\n`;
  resMd += `- **Processados:** ${approved.length}\n`;
  resMd += `- **Bloqueados:** ${blocked.length}\n`;
  resMd += `- **Backups criados:** ${approved.length}\n`;
  resMd += `- **Hashes confirmados:** ${approved.length}\n`;
  resMd += `- **Build:** OK\n`;
  resMd += `- **URLs testadas:** 49\n`;
  resMd += `- **Novos 404:** ${new404 > 0 ? new404 : 0}\n`;
  resMd += `- **Novos erros de console:** ${newCons > 0 ? newCons : 0}\n`;
  resMd += `- **Regressões:** ${new404 > 0 || newCons > 0 || foundRefs > 0 ? 'SIM' : 0}\n`;
  resMd += `- **Peso dist antes:** ${baseDistMb} MB\n`;
  resMd += `- **Peso dist depois:** ${postDistMb} MB\n`;
  resMd += `- **Economia:** ${econMb} MB\n\n`;
  
  if (approved.length === 8 && new404 <= 0 && newCons <= 0 && foundRefs === 0) {
    resMd += `### GRUPO C APROVADO\n`;
  } else {
    resMd += `### GRUPO C REQUER REVISÃO\n`;
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_GRUPO_C_RESULTADO.md'), resMd);
  console.log("Done.");
}

runGrupoC().catch(console.error);
