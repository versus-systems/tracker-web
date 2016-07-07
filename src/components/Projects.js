import React, { Component, PropTypes } from 'react'
import ProjectForm from './ProjectForm'
import Project from './Project'

class Projects extends Component {
  static propTypes = {
    addProject: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    startTask: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tasks: PropTypes.shape({
        count: PropTypes.number.isRequired,
        todo: PropTypes.number.isRequired,
        inProgress: PropTypes.number.isRequired,
        list: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          state: PropTypes.string.isRequired
        }))
      })
    })).isRequired
  }

  render() {
    const { addProject, addTask, startTask, projects } = this.props
    let projectList = projects.map(project =>
      <Project
        key={project.id}
        addTask={addTask}
        startTask={startTask}
        {...project}
      />
    )
    //For now we won't show all the projects
    let allProjects = (
      <div>
        <h1>Project Tracker</h1>
        <ProjectForm addProject={addProject}/>
        {projectList}
      </div>
    )
    return (
      <div>
        {projectList[0]}
      </div>
    )
  }
}

export default Projects
