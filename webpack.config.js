/* eslint-env node */
require("babel-polyfill");
require("babel-register");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    "webpack/hot/dev-server",
    "./src/main",
  ],
  output: {
    path: "./public",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    inline: true,
    hot: true,
  },
  debug: true,
  devtool: "eval",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

