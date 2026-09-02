const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = 'public/images/produtos';
const subdirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

subdirs.forEach(subdir => {
  const dir = path.join(baseDir, subdir);
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    if (f !== f.toLowerCase()) {
      const lower = f.toLowerCase();
      console.log(`Renaming ${f} to ${lower}`);
      try {
        execSync(`git mv "${dir}/${f}" "${dir}/temp_${f}"`);
        execSync(`git mv "${dir}/temp_${f}" "${dir}/${lower}"`);
      } catch(e) {
        console.error(`Failed renaming ${f}: ${e.message}`);
      }
    }
  });
});
