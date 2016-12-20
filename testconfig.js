/* eslint-disable no-var*/
const jsdom = require("jsdom").jsdom;

const exposedProperties = ["window", "navigator", "document"];

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require("babel-register")();

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions[".css"] = function css() { return null; };
require.extensions[".png"] = function png() { return null; };
require.extensions[".jpg"] = function jpg() { return null; };

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.documentRef = document; //  eslint-disable-line no-undef
