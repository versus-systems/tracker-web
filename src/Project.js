import React from "react";
import uuid from "uuid4";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import PieChart from "./PieChart";


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: 0,
      inProgress: 0,
      completed: 0,
      list: [],
      name: "",
      description: "",
    };

    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.incrementState = this.incrementState.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  addTask() {
    const list = [...this.state.list];

    list.push({
      state: 0,
      name: this.state.name,
      description: this.state.description,
      id: uuid(),
    });

    this.setState({
      list,
      name: "",
      description: "",
    });

    this.updateCounts(0);
  }

  incrementState(item) {
    const list = this.state.list;
    const task = item;

    if (task.state > 1) return;
    task.state++;
    this.setState({ list });
    this.updateCounts(task.state);
  }

  updateCounts(taskState) {
    const states = ["todo", "inProgress", "completed"];
    const prevState = states[taskState - 1];
    const nextState = states[taskState];
    this.setState({
      [prevState]: --this.state[prevState],
      [nextState]: ++this.state[nextState],
    });
  }

  filterList(state) {
    const list = this.state.list;
    const btnText = ["Start", "Complete"];
    return (
      <div>
        { list
            .filter(task => task.state === state)
            .map((task, index) => (
              <div key={index}>
                <div>{task.name}</div>
                <div>{task.description}</div>
                { btnText[state]
                  ? <FlatButton
                    className="increment"
                    label={btnText[state]}
                    onClick={() => this.incrementState(task)}
                    name={index}
                  />
                  : null
                }
              </div>)
        )}
      </div>
    );
  }

  render() {
    const { todo, inProgress, completed } = this.state;
    const dataset = [todo, inProgress, completed];

    return (
      <div>
        <PieChart dataset={dataset} />
        <h3>Create New Task</h3>
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
        <FlatButton className="create" label="Create" onClick={this.addTask} />
        <h3>To Do Tasks</h3>
        {this.filterList(0)}
        <h3>In Progress Tasks</h3>
        {this.filterList(1)}
        <h3>Completed Tasks</h3>
        {this.filterList(2)}
      </div>
    );
  }
}

export default Project;
