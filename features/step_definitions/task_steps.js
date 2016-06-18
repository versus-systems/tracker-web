module.exports = function () {
  this.When(/^I add a task '(.*)'$/, function (name) {
    return this.driver
               .findElement({ css: 'input' })
               .sendKeys(name, this.webdriver.Key.ENTER)
  })

  this.When(/^I (.*) the task$/, function (action) {
    let state
    if (action === 'start') {
      state = 'to-do'
    }
    return this.driver
               .findElement({ css: 'h3.' + state })
               .findElement({ css: 'button' }).click()
  })

  this.Then(/^I see the task '(.*)' under '(.*)'$/, function (text, heading) {
    let state = heading.toLowerCase().split(' ').join('-')
    let name = this.driver.findElement({ css: 'h3.' + state }).getText()
    return this.expect(name).to.eventually.have.string(text)
  })
}
