module.exports = function () {
  this.When(/^I view the project$/, function () {
    return this.browser
               .url('/')
  })

  this.Then(/^I see '(.*)'$/, function (text) {
    return this.browser
               .getText('h3')
               .should.eventually.be.equal(text)
  })
}