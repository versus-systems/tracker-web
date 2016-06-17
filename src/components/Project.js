import { Component, PropTypes } from 'react'
import Tasklist from './Tasklist'
import Graph from './Graph'


class Project extends Component {
  render() {
    const { completeTask, addTask, startTask, id, name, tasks } = this.props
    let inputName
    let inputDescription
    return (
      <div>
        <h1>{name}</h1>
        <Graph tasks={tasks} />
        <div className='container list-container'>
          <h2 className='createTask blocks'> Create New Task</h2>
          <hr></hr>
          <div>
            <form onSubmit={e => {
              e.preventDefault()
              if (!inputName.value.trim()) {
                return
              }
              addTask(id, inputName.value, inputDescription.value)
              inputName.value = ''
              inputDescription.value = ''
              document.querySelector('.first-input').focus();
            }}>
              <div className="form-group">
                <label for="name">Task Name</label>
                <input className='form-control first-input' ref={node => { inputName = node }} />
              </div>
              <div className="form-group">
                <label for="desc">Task Description</label>
                <input className='form-control' ref={node => { inputDescription = node }} />
              </div>
              <button type='submit' className='btn btn-primary'>Create</button>
            </form>
          </div>
          <Tasklist
            startTask={startTask}
            completeTask={completeTask}
            tasks={tasks}
            id={id}
          />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  addTask: PropTypes.func.isRequired,
  startTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.shape({
    count: PropTypes.number.isRequired,
    todo: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }))
  })
}

export default Project;
