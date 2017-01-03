/* eslint-env node */
require("babel-polyfill");
require("babel-register");
require("sass-loader");
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
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: "babel" },
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

