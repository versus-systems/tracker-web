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
  ],
};

export default initialState;
