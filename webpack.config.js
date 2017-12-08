const path = require('path');

module.exports = {
  entry: './lib/analytics.js',
  output: {
    filename: 'analytics.js',
    path: path.resolve(__dirname, 'dist')
  }
};
