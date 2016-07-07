import uuid from 'uuid4'
import { ADD_PROJECT, ADD_TASK, START_TASK } from '../actions'

const calculateCounters = (list) => {
  return {
    count: list.length,
    todo: list.filter(t => t.state === 'to-do').length,
    inProgress: list.filter(t => t.state === 'in-progress').length,
    list: list
  }
}

const task = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: uuid(),
        name: action.task.name,
        state: 'to-do'
      }
    case START_TASK:
      if (state.id !== action.taskId) {
        return state
      }
      return { ...state, state: 'in-progress' }
    default:
      return state
  }
}

const tasks = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return calculateCounters([
        ...state.list,
        task(undefined, action)
      ])
    case START_TASK:
      return calculateCounters(state.list.map(t => task(t, action)))
    default:
      return state
  }
}

const project = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        id: uuid(),
        name: action.name,
        tasks: calculateCounters([])
      }
    case ADD_TASK:
    case START_TASK:
      if (state.id !== action.id) {
        return state
      }
      return { ...state, tasks: tasks(state.tasks, action) }
    default:
      return state
  }
}

const projects = (state = [], action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        project(undefined, action)
      ]
    case ADD_TASK:
    case START_TASK:
      return state.map(p => project(p, action))
    default:
      return state
  }
}

export default projects
