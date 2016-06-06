import { Component, PropTypes } from 'react';

class Project extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired
}

export default Project;
