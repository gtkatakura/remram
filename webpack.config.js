const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: '_',
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};
