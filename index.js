const fs = require('fs');

console.log(`Before symlink: ${fs.existsSync('linkHere')}`);
fs.symlinkSync('test/foo.js', 'linkHere');
console.log(`After symlink: ${fs.existsSync('linkHere')}`);
console.log(`issymlink: ${fs.lstatSync('linkHere').isSymbolicLink()}`);
//cleanup
fs.unlinkSync('linkHere');
