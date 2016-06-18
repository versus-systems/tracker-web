import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import Task from './Task'

class Tasklist extends Component {
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
    return (
      <div>
        <h2 className='in-progress block-label'>In Progress </h2>
        <hr className='status-break'></hr>
        { inProgressList }
        <h2 className='to-do block-label'>To Do</h2>
        <hr className='status-break'></hr>
        { todoList }
      </div>
    );
  }
}

export default Tasklist;