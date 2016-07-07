module.exports = function () {
  let expect = this.expect;

  this.When(/^I view the project$/, function (done) {
    done()
  })

  this.Then(/^I see '(.*)'$/, function (text, done) {
    let header = this.wrapper.find('h3').text();
    this.expect(header).to.equal(text);
    done()
  })
}
