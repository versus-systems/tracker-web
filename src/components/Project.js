import React, { PropTypes } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import ProgressBar from "./ProgressBar";

const Project = ({ addTask, startTask, completeTask, id, name, tasks }) => {
  const taskDOM = (task) =>
    (<Task
      key={task.id}
      startTask={startTask}
      completeTask={completeTask}
      projectId={id}
      {...task}
    />);
  let todoList = tasks.list.filter(t => t.state === "to-do").map(taskDOM);
  let inProgressList = tasks.list.filter(t => t.state === "in-progress").map(taskDOM);
  const charts = {
    complete: tasks.count - tasks.inProgress - tasks.todo,
    inProgress: tasks.inProgress,
    todo: tasks.todo,
  };
  return (
    <div>
      <div className="main-title">{name} Todo List</div>
      <div className="subtitle">Task list for the {name} Project</div>
      <div className="progress-bars-container">
        {Object.keys(charts).map(key => (
          <ProgressBar count={tasks.count} chartTotal={charts[key]} name={key} key={key} />
        ))}
      </div>
      <div className="section-title create-new-tasks-label">Create New Task</div>
      <TaskForm projectId={id} addTask={addTask} />
      <div className="section-title progress-tasks-label">In Progress Tasks</div>
        {inProgressList}
      <div className="section-title to-do-tasks-label">Todo Tasks</div>
        {todoList}
    </div>
  );
};

Project.propTypes = {
  addTask: PropTypes.func.isRequired,
  startTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.shape({
    count: PropTypes.number.isRequired,
    todo: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    })),
  }),
};

export default Project;
