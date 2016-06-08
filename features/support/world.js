require('babel-polyfill');

function World() {
  this.browser = require("webdriverio").remote({
      logLevel: 'none',
      host: '0.0.0.0',
      desiredCapabilities: {
          browserName: 'chrome'
      }
  });
  this.chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  this.chai.Should();
  this.chai.use(chaiAsPromised);
  chaiAsPromised.transferPromiseness = this.browser.transferPromiseness;
}

module.exports = function() {
  this.World = World;
};
