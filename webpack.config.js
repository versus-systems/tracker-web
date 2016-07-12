/* eslint-env node */

require("babel-register");
const environment = process.env.NODE_ENV || "development";

module.exports = require(`./config/webpack.${environment}`).default;
