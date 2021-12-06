module.exports = function readInputFile(folderPath) {

  const fs = require('fs');
  const path = require('path');

  return fs.readFileSync(path.resolve(folderPath, "../input.txt")).toString().trimEnd().replace(/\r\n/g,'\n').split('\n');
};