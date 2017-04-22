const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template:'./client/index.html',
  filename: 'index.html',
  inject: 'body'
})

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
  },
  plugins: [HtmlWebpackPluginConfig]
}