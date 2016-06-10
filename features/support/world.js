require('babel-polyfill');
var chai = require('chai');
var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');
var driver = new webdriver.Builder()
                          .forBrowser('chrome')
                          .setChromeOptions(/* ... */)
                          .setFirefoxOptions(/* ... */)
                          .build();

function World() {
  this.webdriver = webdriver;
  this.driver = driver;
  this.chai = require('chai');
  this.chai.use(require('chai-as-promised'));
  this.expect = chai.expect;
}

module.exports = function() {
  this.registerHandler('AfterFeatures', function (event, callback) {
    driver.quit().then(function(){callback()});
  });
  this.World = World;
};
