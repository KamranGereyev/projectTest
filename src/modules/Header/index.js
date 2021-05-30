import { connect } from "react-redux";
import * as actions from "./action";
import * as selectors from "./selectors";
import Header from "./Header";

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state)
});

const mapDispatchToProps = dispatch => ({
    addTaskRequest: (taskData) => dispatch(actions.onAddTaskRequest(taskData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);