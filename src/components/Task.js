import React, { PropTypes } from "react";
require("../../styles/task.scss");

const Task = ({ startTask, completeTask, projectId, id, name, state, description }) => {
  let actionButton = "";
  if (state === "to-do") {
    actionButton = (
      <button
        className="actionButton"
        onClick={e => {
          e.preventDefault();
          startTask(projectId, id);
        }}
      >Start Task</button>
    );
  }
  if (state === "in-progress") {
    actionButton = (
      <button
        className="actionButton"
        onClick={e => {
          e.preventDefault();
          completeTask(projectId, id);
        }}
      >Complete Task</button>
    );
  }
  return (
    <div className="task-item-container">
      <div className="task-label-container">
        <div className="subtitle task-name">{name}</div>
        <div className="gray-notes task-notes">{description} </div>
      </div>
      <div className="task-button-container">
        {actionButton}
      </div>
    </div>
  );
};

Task.propTypes = {
  startTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Task;
