const path = require('path');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
};