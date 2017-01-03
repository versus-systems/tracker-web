import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Project from "./Project";

const list = [
  {
    state: 0,
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
      todo: 0,
      inProgress: 0,
      completed: 0,
    });
  });

  it("starts a task", () => {
    const todoTask = wrapper.state().list[0];
    const createButton = wrapper.find(".create");

    expect(todoTask).to.deep.eql(list[0]);

    createButton.simulate("submit", {
      preventDefault: () => {},
      target: {
        children: [{ innerHTML: "play smash brothers" }],
      },
    });

    const newTask = wrapper.state().list[0];

    expect(wrapper.state().todo).to.equal(1);
    expect(newTask.state).to.equal(0);
    expect(newTask.name).to.equal("play smash brothers");
    expect(newTask.description).to.equal("tournament style");
    expect(newTask.id).to.equal("test-id");
  });

  it("increments a task", () => {
    wrapper.find(".increment").simulate("click");
    const inProgressTask = wrapper.state().list[0];

    expect(inProgressTask.state).to.equal(1);
    expect(wrapper.state().inProgress).to.equal(1);
  });
});
