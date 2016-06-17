require('babel-polyfill');
import React from 'react';
import { mount } from 'enzyme';
import jsdom from 'jsdom'
import chai from 'chai';
import { Provider } from 'react-redux'
import App from '../../src/containers/App';
import configureStore from '../../src/store/configureStore';
import initialState from '../../src/initialState';
const store = configureStore(initialState);

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

function World() {
  this.wrapper = mount(
    <Provider store={store}>
      <App/>
    </Provider>
  );
  this.chai = chai;
  this.chai.use(require('chai-as-promised'));
  this.expect = chai.expect;
  this.simulateKeyPresses = function (input, characters, finalEnter=true) {
    for(let i = 0; i < characters.length; i++) {
      input.simulate('keyPress', {
        which: characters.charCodeAt(i),
        key: characters[i],
        keyCode: characters.charCodeAt(i)
      });
    }
    if (finalEnter) {
      input.simulate('keyPress', {
        which: 13,
        keyCode: 13
      });
    }
  }
}

module.exports = function() {
  this.World = World;
};
