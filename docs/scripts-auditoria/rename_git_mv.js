import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const catalogs = [
  'src/data/catalogs/products/teknoValvesCatalog.ts',
  'src/data/catalogs/products/specialRegulatorsCatalog.ts',
  'src/data/catalogs/products/tkfCatalog.ts'
];

function sanitizeForMatch(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const expectedFiles = new Set();

catalogs.forEach(catalog => {
  if (!fs.existsSync(catalog)) return;
  const content = fs.readFileSync(catalog, 'utf-8');
  const imgRegex = /['"]([^'"]+\.(png|jpg|jpeg|webp))['"]/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    expectedFiles.add(path.basename(match[1]));
  }
});

const baseDir = 'public/images/produtos';
const subdirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

for (const subdir of subdirs) {
  const dirPath = path.join(baseDir, subdir);
  const files = fs.readdirSync(dirPath);
  
  for (const actualFile of files) {
    const actualSanitized = sanitizeForMatch(actualFile);
    // find if there is an expected file for this
    const expected = [...expectedFiles].find(e => sanitizeForMatch(e) === actualSanitized);
    
    if (expected && expected !== actualFile) {
      console.log(`Renaming ${actualFile} -> ${expected}`);
      const oldPath = path.join(dirPath, actualFile);
      const tempPath = path.join(dirPath, 'temp_' + actualFile);
      const newPath = path.join(dirPath, expected);
      
      try {
        execSync(`git mv "${oldPath}" "${tempPath}"`);
        execSync(`git mv "${tempPath}" "${newPath}"`);
      } catch (err) {
        console.error("Failed to git mv", oldPath, err.message);
      }
    }
  }
}
