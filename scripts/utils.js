const fs = require('fs');
const path = require('path');

function deleteNonEmptyFolder(folderPath) {
  let files;
  try {
    files = fs.readdirSync(folderPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Folder does not exist, skipping:', folderPath);
      return;
    }
    throw error;
  }
  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      deleteNonEmptyFolder(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  fs.rmdirSync(folderPath);
}

module.exports = {
  deleteNonEmptyFolder,
};
