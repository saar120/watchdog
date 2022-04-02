const fs = require('fs');


function writeToJSONFile(filePath,data) {
  fs.writeFileSync(filePath,JSON.stringify(data, null, 2));
}

module.exports = {
  writeToJSONFile
};