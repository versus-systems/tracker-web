import { connect } from 'react-redux'
import { Component, PropTypes } from 'react';
import Project from 'components/Project'

class App extends Component {
  render() {
    const { projects } = this.props
    let projectList = projects.map(project =>
      <Project
        key={project.id}
        {...project}
      />
    )
    return (
      <div>
        <h1>Project Tracker</h1>
        {projectList}
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
