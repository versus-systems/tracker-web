import _ from 'lodash'
import { Component, PropTypes } from 'react';
import TaskForm from './TaskForm'
import Task from './Task'

class Project extends Component {
  static propTypes = {
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
        <TaskForm projectId={id} addTask={addTask}/>
        <h4 className='to-do'>To Do</h4>
        {todoList}
        <h4 className='in-progress'>In Progress</h4>
        {inProgressList}
      </div>
    );
  }
}

export default Project;
