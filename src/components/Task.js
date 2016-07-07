import { Component, PropTypes } from 'react';

class Task extends Component {
  static propTypes = {
    startTask: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }

  render() {
    const { startTask, projectId, id, name, state } = this.props
    let actionButton = ''
    if (state === 'to-do') {
      actionButton = <button onClick={e => {
        e.preventDefault()
        startTask(projectId, id)
      }}>Start</button>
    }
    return (
      <div>
        <h6 className={state}>{name} {actionButton}</h6>
      </div>
    );
  }
}

export default Task;
