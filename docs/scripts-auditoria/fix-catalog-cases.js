import fs from 'fs';
import path from 'path';

const catalogs = [
  'src/data/catalogs/products/teknoValvesCatalog.ts',
  'src/data/catalogs/products/specialRegulatorsCatalog.ts',
  'src/data/catalogs/products/calibrationCatalog.ts',
  'src/data/catalogs/products/cuttingWeldingCatalog.ts',
  'src/data/catalogs/products/fireSuppressionCatalog.ts',
  'src/data/catalogs/products/hydraulicCatalog.ts',
  'src/data/catalogs/products/oxygenGenerationCatalog.ts',
  'src/data/catalogs/products/tkfCatalog.ts',
  'src/data/catalogs/products/transmitterCatalog.ts',
  'src/data/catalogs/products/type4Catalog.ts',
  'src/data/catalogs/products/valvesCatalog.ts'
];

function sanitizeForMatch(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

catalogs.forEach(catalog => {
  if (!fs.existsSync(catalog)) return;
  
  let content = fs.readFileSync(catalog, 'utf-8');
  let modified = false;
  
  const imgRegex = /['"]([^'"]+\.(png|jpg|jpeg|webp))['"]/gi;
  
  content = content.replace(imgRegex, (match, p1) => {
    let filename = path.basename(p1);
    
    // Find where this file is physically in public/images/produtos
    let actualFile = null;
    
    // We will scan all subdirectories of public/images/produtos to find the match
    const baseDir = 'public/images/produtos';
    const subdirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());
    
    for (const subdir of subdirs) {
      const dirPath = path.join(baseDir, subdir);
      const files = fs.readdirSync(dirPath);
      const targetSanitized = sanitizeForMatch(filename);
      actualFile = files.find(f => sanitizeForMatch(f) === targetSanitized);
      if (actualFile) {
        break;
      }
    }
    
    if (actualFile && actualFile !== filename) {
      console.log(`Replacing ${filename} with ${actualFile} in ${catalog}`);
      modified = true;
      return match.replace(filename, actualFile);
    }
    return match;
  });
  
  if (modified) {
    fs.writeFileSync(catalog, content);
  }
});
