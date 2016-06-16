import uuid from 'uuid4'
import _ from 'lodash'
import { ADD_PROJECT, ADD_TASK, START_TASK, COMPLETE_TASK } from '../actions'

const calculateCounters = (list) => {
  return {
    count: list.length,
    todo: _.filter(list, t => t.state === 'to-do').length,
    inProgress: _.filter(list, t => t.state === 'in-progress').length,
    complete: _.filter(list, t => t.state === 'complete').length,
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
      return Object.assign({}, state, {
        state: 'in-progress'
      })
    case COMPLETE_TASK:
      if (state.id !== action.taskId) {
        return state
      }
      return Object.assign({}, state, {
        state: 'complete'
      })
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
    case COMPLETE_TASK:
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
    case COMPLETE_TASK:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        tasks: tasks(state.tasks, action)
      })
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
    case COMPLETE_TASK:
      return state.map(p => project(p, action))
    default:
      return state
  }
}

export default projects
