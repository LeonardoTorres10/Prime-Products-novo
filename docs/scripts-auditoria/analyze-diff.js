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

async function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('error', err => reject(err));
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
  });
}

const modifiedFiles = [
  'src/data/catalogs/products/teknoValvesCatalog.ts',
  'src/data/catalogs/products/tkfCatalog.ts',
  'src/data/catalogs/products/type4Catalog.ts',
  'src/data/defaultArticles.ts',
  'src/pages/About.tsx',
  'src/pages/Home.tsx',
  'src/pages/content/ArticleDetail.tsx',
  'src/pages/content/ContentMain.tsx',
  'src/pages/solutions/SolutionsMain.tsx',
  'src/pages/tools/ToolsMain.tsx'
];

const untrackedImages = [
  'public/images/conteudos/hero-conteudo.jpg',
  'public/images/home/imagem-para-home-site.png'
];

async function analyzeDiff() {
  const diffs = {};
  console.log("Analyzing git diffs...");
  for (const f of modifiedFiles) {
    try {
      const { stdout } = await execAsync(`git diff "${f}"`, { cwd: ROOT_DIR });
      diffs[f] = stdout;
    } catch(e) {
      diffs[f] = "Error reading diff";
    }
  }

  // Find references to untracked images
  const refs = {};
  console.log("Analyzing untracked images...");
  for (const f of untrackedImages) {
    const bname = path.basename(f);
    let occurrences = [];
    const srcFiles = await glob('**/*.{tsx,ts,json,css,html}', { cwd: path.join(ROOT_DIR, 'src'), absolute: true });
    for (const srcF of srcFiles) {
      const content = await fs.readFile(srcF, 'utf8');
      if (content.includes(bname)) {
        occurrences.push(path.relative(ROOT_DIR, srcF));
      }
    }
    
    const abs = path.join(ROOT_DIR, f);
    let size = 0, dims = '', hash = '';
    if (await fs.pathExists(abs)) {
       const stat = await fs.stat(abs);
       size = stat.size;
       hash = await getFileHash(abs);
    }

    refs[f] = { occurrences, size, dims, hash };
  }

  // Dump JSON for easy parsing by LLM
  await fs.writeJson(path.join(OUTPUT_DIR, 'analyze_diff_result.json'), { diffs, refs }, { spaces: 2 });
  console.log("Done.");
}

analyzeDiff().catch(console.error);
