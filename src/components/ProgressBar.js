import React, { PropTypes } from "react";
import CircularProgressbar from 'react-circular-progressbar'

require('../../styles/progressBar.scss')

const displayName = (name) => {
  if (name === 'inProgress') {
    return 'in progress';
  }
  return name;
}

const ProgressBar = ({ count, chartTotal, name }) => {
  let displayNameText = displayName(name)
  return (
    <div className={name + " progress-bar-container"}>
      <div><span className="progress-bar-number">{chartTotal}</span><span className='progress-bar-display-name'> {displayNameText}</span></div>
      <CircularProgressbar percentage={chartTotal/count * 100} />
    </div>
  );
};

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  chartTotal: PropTypes.number.isRequired
};

export default ProgressBar;
