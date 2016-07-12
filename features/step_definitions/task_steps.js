module.exports = function () {
  this.When(/^I add a task '(.*)'$/, function (name, done) {
    this.wrapper.find("input").simulate("change", { target: { value: name } });
    this.wrapper.find(".new-task").simulate("click");
    done();
  });

  this.When(/^I (.*) the task$/, function (action, done) {
    let state;
    if (action === "start") {
      state = "to-do";
    }
    this.wrapper.find(`.${state}`)
                .last()
                .find("button")
                .simulate("click");
    done();
  });

  this.Then(/^I see the task '(.*)' under '(.*)'$/, function (text, heading, done) {
    const state = heading.toLowerCase().split(" ").join("-");
    const name = this.wrapper.find(`.${state}`).last().text();
    this.expect(name).to.have.string(text);
    done();
  });
};
