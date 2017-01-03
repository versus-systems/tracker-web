import React from "react";
import uuid from "uuid4";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";
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

  addTask(event) {
    event.preventDefault();
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
      <div className={`state-${state}`}>
        { list
            .filter(task => task.state === state)
            .map((task, index) => (
              <div key={index} className="task">
                <div className="text">
                  <div>{task.name}</div>
                  <div>{task.description}</div>
                </div>
                <div>
                { btnText[state]
                  ? <RaisedButton
                    primary

                    className="increment"
                    label={btnText[state]}
                    onClick={() => this.incrementState(task)}
                    name={index}
                  />
                  : null
                }
                </div>
              </div>)
        )}
      </div>
    );
  }

  render() {
    const { todo, inProgress, completed } = this.state;
    const dataset = [todo, inProgress, completed];

    return (
      <div className="container">

        <h3>Sample Project Todo List</h3>
        <PieChart dataset={dataset} />
        <br />

        <h3>Create New Task</h3>
        <form
          onSubmit={this.addTask}
          className="create"
        >
          <TextField
            value={this.state.name}
            name="name"
            hintText="Task Name"
            onChange={this.onChange}
          /><br />
          <TextField
            value={this.state.description}
            name="description"
            hintText="Task Description"
            onChange={this.onChange}
          /><br /><br />
          <RaisedButton
            label="Create"
            type="submit"
            primary
          />
        </form>
        <br /><br />

        <div>
          <h3 className="todo">Todo Tasks</h3>
          <Divider />
          {this.filterList(0)}
          <br />

          <h3 className="in-progress">In Progress Tasks</h3>
          <Divider />
          {this.filterList(1)}
          <br />

          <h3 className="completed">Completed Tasks</h3>
          <Divider />
          {this.filterList(2)}
          <br />
        </div>

      </div>
    );
  }
}

export default Project;
