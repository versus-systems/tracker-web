import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Projects from "../components/Projects";
import * as ProjectActions from "../actions";

const mapStateToProps = (state) => ({ projects: state.projects });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProjectActions, dispatch);

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

export default App;
