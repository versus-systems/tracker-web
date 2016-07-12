module.exports = function () {
  this.When(/^I view the project$/, (done) => done());

  this.Then(/^I see '(.*)'$/, function (text, done) {
    const header = this.wrapper.find("h3").text();
    this.expect(header).to.equal(text);
    done();
  });
};
