import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import uuid from "uuid4";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todo: 0,
      inProgress: 0,
      list: [],
      name: "",
      description: ""
    };

    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.startTask = this.startTask.bind(this);
  }

  onChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value });
  }

  addTask() {
    let { count, todo } = this.state;
    const list = [...this.state.list];

    list.push({
      state: "to-do",
      name: this.state.name,
      description: this.state.description,
      id: uuid(),
    });

    this.setState({
      list,
      name: "",
      description: "",
      count: ++count,
      todo: ++todo,
    });
  }

  startTask(event) {
    event.preventDefault();
    const taskName = event.target.children[0].innerHTML;
    let { todo, inProgress } = this.state;
    let list = [...this.state.list];

    list = list.map(task => {
      const newTask = { ...task };
      if (task.name === taskName) {
        newTask.state = "in-progress";
      }
      return newTask;
    });


    this.setState({
      list,
      todo: --todo,
      inProgress: ++inProgress,
    });
  }

  render() {
    const { count, todo, inProgress, list } = this.state;
    const todoList = list
      .filter(task => task.state === "to-do")
      .map((task, index) => (
        <form
          key={index}
          onSubmit={this.startTask}
          className="to-do-form"
        >
          <div>{task.name}</div>
          <div>{task.description}</div>
          <FlatButton
            label="Start"
            type="submit"
          />
        </form>)
      );

    const inProgressList = list
      .filter(task => task.state === "in-progress")
      .map((task, index) => (<p key={index}>{task.name}</p>));

    return (
      <div>
        <p>
          <span className="tasks">Tasks: {count}, </span>
          <span className="to-dos">To Do: {todo}, </span>
          <span className="in-progress">In Progress: {inProgress}</span>
        </p>
        <TextField
          value={this.state.name}
          name="name"
          hintText="Task Name"
          onChange={this.onChange}
        />
        <TextField
          value={this.state.description}
          name="description"
          hintText="Task Description"
          onChange={this.onChange}
        />
        <FlatButton label="Create" onClick={this.addTask} />
        <h3>To Do</h3>
        {todoList}
        <h3>In Progress</h3>
        {inProgressList}
      </div>
    );
  }
}

export default Project;
