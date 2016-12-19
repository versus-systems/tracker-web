import React, { PropTypes } from "react";
import CircularProgressbar from "react-circular-progressbar";

require("../../styles/progressBar.scss");

const displayName = (name) => {
  if (name === "inProgress") {
    return "in progress";
  }
  return name;
};

const ProgressBar = ({ count, chartTotal, name }) => {
  let displayNameText = displayName(name);
  return (
    <div className={`${name} progress-bar-container`}>
      <div className="progress-bar-label">
        <div className="progress-bar-number">{chartTotal}</div>
        <div className="progress-bar-display-name gray-notes"> {displayNameText}</div>
      </div>
      <CircularProgressbar strokeWidth={15} percentage={Math.floor(chartTotal / count * 100)} />
    </div>
  );
};

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  chartTotal: PropTypes.number.isRequired,
};

export default ProgressBar;
