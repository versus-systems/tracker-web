import React, { Component, PropTypes } from 'react'

class TaskForm extends Component {
  static propTypes = {
    projectId: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  setName(e) {
    this.setState({ name: e.target.value })
  }

  submitTask(e) {
    e.preventDefault()
    if (!this.state.name) { return }
    this.props.addTask(this.props.projectId, this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        <input value={this.state.name} onChange={this.setName.bind(this)} />
        <button className='new-task' onClick={this.submitTask.bind(this)}>Add Task</button>
      </div>
    )
  }
}

export default TaskForm
