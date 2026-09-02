import fs from 'fs-extra';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

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

async function getPerceptualHash(filePath) {
  try {
    const buffer = await sharp(filePath)
      .resize(8, 8, { fit: 'fill' })
      .greyscale()
      .raw()
      .toBuffer();
    // Simple average hash
    const sum = buffer.reduce((acc, val) => acc + val, 0);
    const avg = sum / buffer.length;
    let hash = '';
    for (let i = 0; i < buffer.length; i++) {
      hash += buffer[i] >= avg ? '1' : '0';
    }
    return BigInt('0b' + hash).toString(16);
  } catch (e) {
    return null;
  }
}

async function scanDirectory(dir, isArchive = false) {
  const fullDirPath = path.join(ROOT_DIR, dir);
  if (!fs.existsSync(fullDirPath)) return [];
  
  const files = await glob('**/*.{jpg,jpeg,png,webp,avif,svg,gif}', {
    cwd: fullDirPath,
    absolute: true,
    nocase: true
  });
  
  const results = [];
  for (let file of files) {
    const stat = await fs.stat(file);
    const relativePath = '/' + path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    let width = 0, height = 0, phash = null;
    
    if (!file.endsWith('.svg')) {
        try {
            const metadata = await sharp(file).metadata();
            width = metadata.width || 0;
            height = metadata.height || 0;
            phash = await getPerceptualHash(file);
        } catch(e) {}
    } else {
        // SVG might fail with sharp if no rsvg, fallback gracefully
        try {
           const content = await fs.readFile(file, 'utf8');
           const widthMatch = content.match(/width="([^"]+)"/);
           const heightMatch = content.match(/height="([^"]+)"/);
           if (widthMatch) width = parseInt(widthMatch[1]) || 0;
           if (heightMatch) height = parseInt(heightMatch[1]) || 0;
        } catch(e) {}
    }

    const sha256 = await getFileHash(file);
    
    results.push({
      name: path.basename(file),
      path: relativePath,
      ext: path.extname(file).toLowerCase(),
      width,
      height,
      sizeKB: (stat.size / 1024).toFixed(2),
      sizeBytes: stat.size,
      dir: path.dirname(relativePath),
      isArchive,
      sha256,
      phash
    });
  }
  return results;
}

async function main() {
  await fs.ensureDir(OUTPUT_DIR);
  console.log("Scanning public/images...");
  const publicImages = await scanDirectory('public/images', false);
  console.log("Scanning src/assets...");
  const srcAssets = await scanDirectory('src/assets', false);
  console.log("Scanning ARQUIVO/...");
  const archive = await scanDirectory('ARQUIVO', true);

  const allAssets = [...publicImages, ...srcAssets, ...archive];
  await fs.writeJson(path.join(OUTPUT_DIR, 'physical_scan.json'), allAssets, { spaces: 2 });
  console.log(`Physical scan complete. Found ${allAssets.length} total images.`);
}

main().catch(console.error);
