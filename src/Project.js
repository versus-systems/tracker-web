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
      input: "",
    };

    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.startTask = this.startTask.bind(this);
  }

  onChange(event) {
    this.setState({ input: event.target.value });
  }

  addTask() {
    let { count, todo } = this.state;
    const list = [...this.state.list];

    list.push({
      state: "to-do",
      name: this.state.input,
      id: uuid()
    });

    this.setState({
      list,
      input: "",
      count: ++count,
      todo: ++todo
    });
  }

  startTask(event) {
    event.preventDefault();
    const taskName = event.target.children[0].innerHTML;
    let { todo, inProgress } = this.state;
    let list = [...this.state.list];

    list = list.map((task) => {
      if (task.name === taskName) {
        task.state = "in-progress";
      }
      return task;
    });

    this.setState({
      list,
      todo: --todo,
      inProgress: ++inProgress
    });
  }

  render() {
    const { count, todo, inProgress, list } = this.state;
    const todoList = list
                        .filter((task) => task.state === "to-do" )
                        .map((task, index) =>(
                          <form key={index} onSubmit={this.startTask}>
                            <span>{task.name}</span>
                            <FlatButton label="Start" type="submit" />
                          </form>)
                        );

    const inProgressList = list
                              .filter((task) => task.state === "in-progress" )
                              .map((task, index) => (<p key={index}>{task.name}</p>));

    return (
      <div>
        <p>
          Tasks: {count},
          To Do: {todo},
          In Progress: {inProgress}
        </p>
        <TextField
          value={this.state.input}
          hintText="Make a new task"
          onChange={this.onChange}
        />
        <FlatButton label="Add Task" onClick={this.addTask} />
        <h3>To Do</h3>
        {todoList}
        <h3>In Progress</h3>
        {inProgressList}
      </div>
    );
  }
};

export default Project;
