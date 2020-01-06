const fs = require('fs');

fs.mkdirSync("tmp");
fs.symlinkSync(".", "tmp/out");
console.log(`fs.existSync(tmp/out) : ${fs.existsSync('tmp/out')}`);
fs.rmdirSync('tmp/out');
