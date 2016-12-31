import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Project from "./Project";

const list = [
  {
    state: "to-do",
    name: "play smash brothers",
    description: "tournament style",
    id: "test-id",
  },
];

describe("Project", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Project />);
    wrapper.setState({
      list,
      count: 1,
      todo: 1,
      inProgress: 0,
    });
  });

  it("renders tasks", () => {
    const tasks = wrapper.find(".tasks").props();
    const totalTasks = tasks.children[1];
    expect(totalTasks).to.equal(1);
  });

  it("starts a task", () => {
    const todoTask = wrapper.state().list[0];
    const todoForm = wrapper.find(".to-do-form");

    expect(todoTask).to.deep.eql(list[0]);

    todoForm.simulate("submit", {
      preventDefault: () => {},
      target: {
        children: [{ innerHTML: "play smash brothers" }],
      },
    });

    const inProgressTask = wrapper.state().list[0];

    expect(inProgressTask.state).to.equal("in-progress");
    expect(inProgressTask.name).to.equal("play smash brothers");
    expect(inProgressTask.description).to.equal("tournament style");
    expect(inProgressTask.id).to.equal("test-id");
  });
});
