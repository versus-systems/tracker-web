import React, { Component, PropTypes } from 'react'
import Project from './Project'

class Projects extends Component {
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
    let input
    return (
      <div>
        <h1>Project Tracker</h1>
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            addProject(input.value)
            input.value = ''
          }}>
            <input ref={node => { input = node }} />
            <button type='submit'>Add Project</button>
          </form>
        </div>
        {projectList}
      </div>
    )
  }
}

Projects.propTypes = {
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

export default Projects
