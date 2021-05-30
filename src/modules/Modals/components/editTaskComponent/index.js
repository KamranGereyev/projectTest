import { connect } from "react-redux";
import * as actions from "./action";
import * as selectors from "./selector";
import editTaskComponent from "./editTaskComponent.jsx";

const mapStateToProps = state => ({
    modals: selectors.getModals(state),
});

const mapDispatchToProps = dispatch => ({
    editTaskRequest: newTaskData => dispatch(actions.onEditTaskRequest(newTaskData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(editTaskComponent);