const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
       {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
    ]
  }
}