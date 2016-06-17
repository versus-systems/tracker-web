import _ from 'lodash'
import { Component, PropTypes } from 'react';
import Task from './Task'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { newTaskName: '' };
  }

  setNewClassName(e) {
    this.setState({ newTaskName: e.target.value })
  }

  render() {
    const { addTask, startTask, id, name, tasks } = this.props
    const taskDOM = (task) => {
      return <Task
              key={task.id}
              startTask={startTask}
              projectId={id}
              {...task}
            />
    }
    let todoList = _.filter(tasks.list, t => t.state === 'to-do').map(taskDOM)
    let inProgressList = _.filter(tasks.list, t => t.state === 'in-progress').map(taskDOM)
    return (
      <div>
        <h3>{name}</h3>
        <div>
          <p>Tasks: {tasks.count}, To Do: {tasks.todo}, In Progress: {tasks.inProgress}</p>
        </div>
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!this.state.newTaskName) {
              return
            }
            addTask(id, this.state.newTaskName)
            this.setState({ newTaskName: '' })
          }}>
            <input value={this.state.newTaskName} onChange={this.setNewClassName.bind(this)} />
            <button className='add-task' type='submit'>Add Task</button>
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
