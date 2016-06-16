import _ from 'lodash'
import { Component, PropTypes } from 'react';
import Task from './Task'
import { Circle } from 'rc-progress';

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
    let percentComplete = tasks.list.length > 0 ? tasks.complete/tasks.count*100 : 0
    let percentTodo = tasks.list.length > 0 ? tasks.todo/tasks.count*100 : 0
    let percentInProgress = tasks.list.length > 0 ? tasks.inProgress/tasks.count*100 : 0

    return (
      <div>
        <h3>{name}</h3>
        <div className='container'>
          <div className='col-md-4 center-container'>
            <p className='center-text'>Complete: {Math.floor(percentComplete)}</p>
            <div className='col-md-6 col-centered'>
              <Circle percent={ percentComplete } strokeWidth='10' strokeColor='#3EC556' />
            </div>
          </div>
          <div className='col-md-4'>
            <p className='center-text'>In Progress: {Math.floor(percentInProgress)}</p>
            <div className='col-md-6 col-centered'>
              <Circle percent={ percentInProgress } strokeWidth='10' strokeColor='#3E74C5' />
            </div>
          </div>
          <div className='col-md-4'>
            <p className='center-text'>To Do: {Math.floor(percentTodo)}</p>
            <div className='col-md-6 col-centered'>
              <Circle percent={ percentTodo } strokeWidth='10' strokeColor='#C53E3E' />
            </div>
          </div>
          <p>Tasks: {tasks.count}</p>
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
