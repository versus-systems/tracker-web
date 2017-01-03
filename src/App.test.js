import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "./App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders project header", () => {
    const header = wrapper.find("AppBar");
    expect(header.length).to.equal(1);
    expect(header.props().title).to.equal("Sample Project Todo List");
  });
});
