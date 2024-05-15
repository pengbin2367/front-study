const util = require('util');
const fs = require('fs');

let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./wrap/readFileWrap.js').then(value => {
    console.log(value.toString());
})