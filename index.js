const fs = require('fs');

fs.mkdirSync('tmp');
fs.mkdirSync('linkhere');
fs.symlinkSync('linkhere', 'tmp/out');

let err = false;
try {
  fs.rmdirSync('tmp/out');
} catch (e) {
  if (e && e.code == 'ENOTDIR') {
    console.log(`Error caught`);
    err = true;
  }
}
if (!err) {
  console.log(`Trying junction`);
  fs.unlinkSync('tmp/out');
  fs.symlinkSync('.', 'tmp/out', 'junction');
  fs.rmdirSync('tmp/out');
  throw new Error(`Shouldn't reach here`);
}
