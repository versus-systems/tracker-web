import { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { completeTask, startTask, projectId, id, name, state, description} = this.props
    let actionButton = ''
    if (state === 'to-do') {
      actionButton = <button className='btn btn-primary' onClick={e => {
        e.preventDefault()
        startTask(projectId, id)
      }}>Start Task</button>
    }
    else if (state === 'in-progress') {
      actionButton = <button className='btn btn-primary' onClick={e => {
        e.preventDefault()
        completeTask(projectId, id)
      }} >Complete Task</button>
    }
    return (
      <div>
        <h3 className={state}>{name} {description} {actionButton} </h3>
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
