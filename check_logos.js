const fs = require('fs');
const path = require('path');
const dir = 'C:/workspace/onetemp-landing/attachment/logo/PNG';

let out = '';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.png')) {
    const buffer = fs.readFileSync(path.join(dir, file));
    if (buffer.length > 24) {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      out += `${file}: ${width}x${height} (${(width/height).toFixed(2)} ratio)\n`;
    }
  }
});
fs.writeFileSync('C:/workspace/onetemp-landing/logo_sizes_utf8.txt', out, 'utf8');
