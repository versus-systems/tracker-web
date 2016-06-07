import { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { startTask, projectId, id, name, state } = this.props
    let actionButton = ''
    if (state === 'todo') {
      actionButton = <button onClick={e => {
        e.preventDefault()
        startTask(projectId, id)
      }}>Start</button>
    }
    return (
      <div>
        <h6>{name} {actionButton}</h6>
      </div>
    );
  }
}

Task.propTypes = {
  startTask: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}

export default Task;
