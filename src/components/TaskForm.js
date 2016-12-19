import React, { Component, PropTypes } from "react";

class TaskForm extends Component {

  static propTypes = {
    projectId: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.setName = this.setName.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  submitTask(e) {
    e.preventDefault();
    if (!this.state.name) { return; }
    this.props.addTask(this.props.projectId, this.state.name);
    this.setState({ name: "" });
  }

  render() {
    return (
      <div className='task-form-container'>
        <input value={this.state.name} onChange={this.setName} />
        <button className="new-task" onClick={this.submitTask}>Create</button>
      </div>
    );
  }
}

export default TaskForm;
