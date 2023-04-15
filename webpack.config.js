const path = require('path');

module.exports = {
  entry: './main.js', // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory for the bundled files
    filename: 'bundle.js' // The name of the bundled file
  }
};