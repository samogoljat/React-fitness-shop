const fs = require('fs');
const path = require('path');

function getFormattedFilenames() {
  const directoryPath =
    'I:DropboxProjektiProgramiranjeReactProjektiFitness_shop_app\fitness-shop-frontendsrcassetsgym';
  console.log(directoryPath);
  let filenames = [];

  if (fs.existsSync(directoryPath)) {
    filenames = fs
      .readdirSync(directoryPath)
      .filter(
        (filename) => filename.endsWith('.jpg') || filename.endsWith('.webp')
      )
      .map((filename) => {
        const nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
        return nameWithoutExtension
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      });
  }

  return filenames;
}

module.exports = { getFormattedFilenames };
