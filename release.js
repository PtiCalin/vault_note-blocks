const fs = require('fs');
const path = require('path');

const releaseDir = path.join(__dirname, 'release');

if (fs.existsSync(releaseDir)) {
  fs.rmSync(releaseDir, { recursive: true, force: true });
}
fs.mkdirSync(releaseDir);

const files = [
  ['dist/main.js', 'main.js'],
  ['dist/styles.css', 'styles.css'],
  ['manifest.json', 'manifest.json']
];

for (const [src, dest] of files) {
  const srcPath = path.join(__dirname, src);
  const destPath = path.join(releaseDir, dest);
  fs.copyFileSync(srcPath, destPath);
}

const expected = new Set(files.map(f => f[1]));
const actual = fs.readdirSync(releaseDir);

if (actual.length !== expected.size || !actual.every(f => expected.has(f))) {
  throw new Error('Release directory does not contain the expected files.');
}

console.log('Release files prepared:', actual.join(', '));
