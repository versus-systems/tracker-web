import React from "react";
import AppBar from "material-ui/AppBar";
import Project from "./Project";

const App = () => (
  <div>
    <AppBar
      title="Sample Project Todo List"
      iconElementLeft={<div />}
    />
    <Project />
  </div>
);

export default App;
