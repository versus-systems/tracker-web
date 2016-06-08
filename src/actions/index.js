export const ADD_PROJECT = 'ADD_PROJECT'
export const ADD_TASK = 'ADD_TASK'
export const START_TASK = 'START_TASK'

export function addProject(name) {
  return {
    type: ADD_PROJECT,
    name
  }
}

export function addTask(projectId, name) {
  return {
    type: ADD_TASK,
    id: projectId,
    task: {
      name
    }
  }
}

export function startTask(projectId, taskId) {
  return {
    type: START_TASK,
    id: projectId,
    taskId
  }
}
