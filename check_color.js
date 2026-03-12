const fs = require('fs');
const dir = 'C:/workspace/onetemp-landing/public/logo';

['logo-14.png', 'logo-15.png', 'logo-19.png', 'logo-20.png'].forEach(file => {
  const buf = fs.readFileSync(`${dir}/${file}`);
  // Read first few KB to find non-transparent pixels
  // Because PNGs are compressed, finding colors is hard without a library.
});
console.log('Skipping pixel parsing as PNG requires zlib/filtering.');
