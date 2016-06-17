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
        <h2 className='to-do blocks'>To Do</h2>
        <hr></hr>
        { todoList }
        <h2 className='in-progress blocks'>In Progress </h2>
        <hr></hr>
        { inProgressList }
      </div>
    );
  }
}

export default Tasklist;