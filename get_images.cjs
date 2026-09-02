const fs = require('fs');

function extractImages(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(/<img[^>]+src="([^">]+)"/g);
  if (matches) {
    const urls = matches.map(m => m.match(/src="([^"]+)"/)[1]).filter(url => url.includes('wp-content/uploads'));
    console.log(urls);
  } else {
    console.log('No images found');
  }
}

console.log('--- CYLINDERS ---');
extractImages('C:\\Users\\FILIPE DANIEL\\.gemini\\antigravity\\brain\\aab9ef78-f0d6-4e73-b0f2-f3bbdc4c1a1c\\.system_generated\\steps\\11613\\content.md');

console.log('--- PIPING ---');
extractImages('C:\\Users\\FILIPE DANIEL\\.gemini\\antigravity\\brain\\aab9ef78-f0d6-4e73-b0f2-f3bbdc4c1a1c\\.system_generated\\steps\\11610\\content.md');
