const { execSync } = require('child_process');

const output = execSync('git ls-files public_html/images/produtos').toString();
const files = output.split('\n').map(x => x.trim()).filter(Boolean);

files.forEach(f => {
  const filename = f.split('/').pop();
  if (filename !== filename.toLowerCase()) {
    const lowerPath = f.substring(0, f.lastIndexOf('/') + 1) + filename.toLowerCase();
    console.log(`Renaming in Git: ${f} -> ${lowerPath}`);
    try {
      execSync(`git mv -f "${f}" "${lowerPath}"`);
    } catch(e) {
      console.error(`Failed: ${e.message}`);
    }
  }
});
