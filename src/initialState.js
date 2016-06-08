import uuid from 'uuid4'

const initialState = {
  projects: [
    {
      id: uuid(),
      name: 'Sample Project',
      tasks: {
        count: 2,
        todo: 1,
        inProgress: 1,
        list: [
          {
            id: uuid(),
            name: 'Task Number 1',
            state: 'in-progress'
          },
          {
            id: uuid(),
            name: 'Task Number 2',
            state: 'todo'
          }
        ]
      }
    },
    {
      id: uuid(),
      name: 'Another Project',
      tasks: {
        count: 1,
        todo: 0,
        inProgress: 1,
        list: [
          {
            id: uuid(),
            name: 'Important Task',
            state: 'in-progress'
          }
        ]
      }
    }
  ]
}

export default initialState
