import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');

async function scanCode() {
  await fs.ensureDir(OUTPUT_DIR);
  const files = await glob('**/*.{ts,tsx,css,json,html,md}', {
    cwd: path.join(ROOT_DIR, 'src'),
    absolute: true,
    ignore: ['**/node_modules/**']
  });

  const dataFiles = await glob('**/*.{ts,json}', {
    cwd: path.join(ROOT_DIR, 'data'),
    absolute: true,
    ignore: ['**/node_modules/**']
  });
  
  const allFiles = [...files, ...dataFiles];
  const references = [];
  const imageRegex = /([^'"\s(]+\.(?:jpg|jpeg|png|webp|avif|svg|gif))/ig;
  const genericImageRegex = /\/images\/([^'"\s)]+)/ig;

  for (const file of allFiles) {
    const content = await fs.readFile(file, 'utf8');
    const lines = content.split('\n');
    const relativeFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let match;
      
      // Match exact filenames with extensions
      while ((match = imageRegex.exec(line)) !== null) {
        references.push({
          file: relativeFile,
          line: i + 1,
          match: match[0],
          context: line.trim()
        });
      }
      
      // Match /images/ dynamic strings
      while ((match = genericImageRegex.exec(line)) !== null) {
        // avoid duplicates if already matched by imageRegex
        if (!match[0].match(/\.(jpg|jpeg|png|webp|avif|svg|gif)$/i)) {
          references.push({
            file: relativeFile,
            line: i + 1,
            match: match[0],
            context: line.trim()
          });
        }
      }
    }
  }

  await fs.writeJson(path.join(OUTPUT_DIR, 'logical_scan.json'), references, { spaces: 2 });
  console.log(`Logical scan complete. Found ${references.length} potential references.`);
}

scanCode().catch(console.error);
