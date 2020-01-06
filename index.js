const fs = require('fs');

console.log(`----------------TEST-1-------------`);
console.log(`Before symlink: ${fs.existsSync('linkHere')}`);
fs.symlinkSync('test/foo.js', 'linkHere');
console.log(`After symlink: ${fs.existsSync('linkHere')}`);
console.log(`issymlink: ${fs.lstatSync('linkHere').isSymbolicLink()}`);
//cleanup
fs.unlinkSync('linkHere');

console.log(`----------------TEST-2-------------`);
fs.mkdirSync("tmp");
fs.symlinkSync(".", "tmp/out");
console.log(`fs.exist_1 ${fs.existsSync('tmp/out')}`);
fs.rmdirSync('tmp/out');
