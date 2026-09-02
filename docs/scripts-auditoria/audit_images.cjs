const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const rootDir = path.join(__dirname, '..', '..');
const srcFiles = getAllFiles(path.join(rootDir, 'src'));
const imageRegex = /['"](\/images\/[^'"]+)['"]/g;
const foundImages = new Set();
const filesReferencing = new Map();

for (const file of srcFiles) {
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json')) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      const img = match[1];
      foundImages.add(img);
      if (!filesReferencing.has(img)) filesReferencing.set(img, new Set());
      filesReferencing.get(img).add(file.replace(rootDir, ''));
    }
  }
}

const gitFiles = execSync('git ls-files public/images', { cwd: rootDir }).toString().split('\n').map(x => x.trim()).filter(Boolean);
const gitFilesSet = new Set(gitFiles.map(f => f.replace('public/images/', '/images/')));
const gitFilesLowerSet = new Map();
gitFiles.forEach(f => {
  const norm = f.replace('public/images/', '/images/').toLowerCase();
  gitFilesLowerSet.set(norm, f.replace('public/images/', '/images/'));
});

const report = { missing: [], caseMismatch: [] };

for (const img of foundImages) {
  const normImg = img.toLowerCase();
  if (gitFilesSet.has(img)) {
    // Perfect match
  } else if (gitFilesLowerSet.has(normImg)) {
    report.caseMismatch.push({
      usedInCode: img,
      trackedInGit: gitFilesLowerSet.get(normImg),
      files: Array.from(filesReferencing.get(img))
    });
  } else {
    // Completely missing
    const diskPath = path.join(rootDir, 'public', img);
    if (fs.existsSync(diskPath)) {
      report.missing.push({ img, status: 'On disk but not tracked in git', files: Array.from(filesReferencing.get(img)) });
    } else {
      report.missing.push({ img, status: 'Completely missing', files: Array.from(filesReferencing.get(img)) });
    }
  }
}

fs.writeFileSync(path.join(rootDir, 'image_audit_report.json'), JSON.stringify(report, null, 2));
console.log('Report generated at image_audit_report.json');
