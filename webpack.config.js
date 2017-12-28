var path = require('path');
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js",
    library: "leen-helper",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  }
}