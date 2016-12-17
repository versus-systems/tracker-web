import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./App";

injectTapEventPlugin();

const rootElement = document.getElementById("App");

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  rootElement
);
