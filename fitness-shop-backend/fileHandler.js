const fs = require('fs');
const path = require('path');

const gymAssetsDirectory = path.join(__dirname, 'src', 'assets', 'gym');

const fetchFormattedFileNames = () => {
  let formattedNames = [];

  try {
    const fileNames = fs.readdirSync(gymAssetsDirectory);

    formattedNames = fileNames.map((fileName) => {
      // Remove the file extension
      const nameWithoutExtension = fileName.split('.')[0];
      // Convert underscores to spaces and capitalize each word
      return nameWithoutExtension
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    });
  } catch (error) {
    console.error('Error reading the gym directory:', error);
  }

  return formattedNames;
};

module.exports = fetchFormattedFileNames;
