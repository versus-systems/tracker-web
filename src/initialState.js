import uuid from "uuid4";

const initialState = {
  projects: [
    {
      id: uuid(),
      name: "Sample Project",
      tasks: {
        count: 0,
        todo: 0,
        inProgress: 0,
        list: [],
      },
    },
    // un-comment mock data below and comment data above to check UI
    // {
    //   id: uuid(),
    //   name: "Versus",
    //   tasks: {
    //     count: 10,
    //     todo: 5,
    //     inProgress: 3,
    //     list: [
    //       {
    //         id: "1",
    //         name: "In Progress Task 1",
    //         state: "in-progress",
    //         description: "Description for the in progress task #1"
    //       },
    //       {
    //         id: "2",
    //         name: "In Progress Task 2",
    //         state: "in-progress",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "3",
    //         name: "In Progress Task 3",
    //         state: "in-progress",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "4",
    //         name: "Todo 1",
    //         state:"to-do",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "5",
    //         name: "Todo 2",
    //         state:"to-do",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "6",
    //         name: "Todo 3",
    //         state:"to-do",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "7",
    //         name: "Todo 4",
    //         state:"to-do",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "8",
    //         name: "Todo 5",
    //         state:"to-do",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: "9",
    //         name: "Complete 1",
    //         state: "complete",
    //         description: "Description for the task"
    //       },
    //       {
    //         id: uuid(),
    //         name: "Complete 2",
    //         state: "complete",
    //         description: "Description for the task"
    //       }
    //     ],
    //   },
    // },
    {
      id: uuid(),
      name: "Another Project",
      tasks: {
        count: 0,
        todo: 0,
        inProgress: 0,
        list: [],
      },
    },
  ],
};

export default initialState;
