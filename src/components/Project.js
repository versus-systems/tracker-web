import _ from 'lodash'
import { Component, PropTypes } from 'react';
import Task from './Task'

class Project extends Component {
  render() {
    const { completeTask, addTask, startTask, id, name, tasks } = this.props
    const taskDOM = (task) => {
      return <Task
              key={task.id}
              startTask={startTask}
              completeTask={completeTask}
              projectId={id}
              {...task}
            />
    }
    let todoList = _.filter(tasks.list, t => t.state === 'to-do').map(taskDOM)
    let inProgressList = _.filter(tasks.list, t => t.state === 'in-progress').map(taskDOM)
    let inputName
    let inputDescription
    return (
      <div>
        <h3>{name}</h3>
        <div>
          <p>Tasks: {tasks.count}, Complete: {tasks.complete}, To Do: {tasks.todo}, In Progress: {tasks.inProgress}</p>
        </div>
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!inputName.value.trim()) {
              return
            }
            addTask(id, inputName.value, inputDescription.value)
            inputName.value = ''
            inputDescription.value = ''
          }}>
            <input ref={node => { inputName = node }} />
            <input ref={node => { inputDescription = node }} />
            <button type='submit'>Add Task</button>
          </form>
        </div>
        <h4 className='to-do'>To Do</h4>
        {todoList}
        <h4 className='in-progress'>In Progress</h4>
        {inProgressList}
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
