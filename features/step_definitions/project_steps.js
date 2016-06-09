module.exports = function () {
  this.When(/^I view the project$/, function () {
    return this.driver
               .get('http://localhost:8080/')
  })

  this.Then(/^I see '(.*)'$/, function (text) {
    let expect = this.expect;
    let header = this.driver
                     .findElement({ css: 'h3' })
                     .getText()
    return expect(header).to.eventually.equal(text)
  })
}
