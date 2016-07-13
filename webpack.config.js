var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: { path: __dirname, filename: './assets/bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less'],
    modulesDirectories: [".", "components", "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
};
