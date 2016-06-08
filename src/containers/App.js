import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Projects from 'components/Projects'
import * as ProjectActions from '../actions'

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ProjectActions, dispatch)
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)

export default App;
