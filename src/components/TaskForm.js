import React, { Component, PropTypes } from "react";
require("../../styles/taskForm.scss");

class TaskForm extends Component {

  static propTypes = {
    projectId: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  setDescription(e) {
    this.setState({ description: e.target.value });
  }

  submitTask(e) {
    e.preventDefault();
    if (!this.state.name) { return; }
    this.props.addTask(this.props.projectId, this.state);
    this.setState({ name: "", description: "" });
  }

  render() {
    return (
      <div className="task-form-container">
        <div className="input-label">Task Name</div>
        <div>
          <input
            value={this.state.name}
            onChange={this.setName}
            placeholder="Name of the new task"
          />
        </div>
        <div className="input-label">Task Description</div>
        <div>
          <input
            value={this.state.description}
            onChange={this.setDescription}
            placeholder="Description for the new task"
          />
        </div>
        <button className="new-task" onClick={this.submitTask}>Create</button>
      </div>
    );
  }
}

export default TaskForm;
