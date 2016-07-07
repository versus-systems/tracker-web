import { Component, PropTypes } from 'react'

class ProjectForm extends Component {
  static propTypes = {
    addProject: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  setName(e) {
    this.setState({ name: e.target.value })
  }

  submitProject(e) {
    e.preventDefault()
    if (!this.state.name) { return }
    this.props.addProject(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        <input value={this.state.name} onChange={this.setName.bind(this)} />
        <button onClick={this.submitProject.bind(this)}>Add Project</button>
      </div>
    )
  }
}

export default ProjectForm
