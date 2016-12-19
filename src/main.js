import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import initialState from "./initialState";
import App from "./containers/App";

require('../styles/global.scss');

const store = configureStore(initialState);
const rootElement = document.getElementById("App");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
