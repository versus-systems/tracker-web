import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import PieChart from "./PieChart";

describe("PieChart", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PieChart dataset={[1, 2, 3]} />);
  });

  it("renders tasks", () => {
    const tasks = wrapper.find("#in-progress").find("h3").props();
    const totalTasks = tasks.children[0];
    expect(totalTasks).to.equal(2);
  });
});
