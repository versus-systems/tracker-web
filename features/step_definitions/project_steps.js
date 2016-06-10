module.exports = function () {
  let expect = this.expect;

  this.When(/^I view the project$/, function () {
    return this.driver.get('http://localhost:8080/')
  })

  this.Then(/^I see '(.*)'$/, function (text) {
    let header = this.driver.findElement({ css: 'h3' }).getText()
    return this.expect(header).to.eventually.equal(text)
  })
}
