import { PropTypes } from 'react';

const Task = ({ startTask, projectId, id, name, state }) => {
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

Task.propTypes = {
  startTask: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}

export default Task;
