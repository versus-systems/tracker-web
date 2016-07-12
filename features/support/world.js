require("babel-polyfill");
import React from "react";
import { mount } from "enzyme";
import jsdom from "jsdom";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Provider } from "react-redux";
import App from "../../src/containers/App";
import configureStore from "../../src/store/configureStore";
import initialState from "../../src/initialState";
const store = configureStore(initialState);

const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.document = doc;
global.window = doc.defaultView;

function World() {
  this.wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  this.chai = chai;
  this.chai.use(chaiAsPromised);
  this.expect = chai.expect;
}

module.exports = function initWorld() {
  this.World = World;
};
