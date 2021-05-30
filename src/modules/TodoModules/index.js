import { connect } from "react-redux";
import * as actions from "./action";
import * as selectors from "./selectors";
import TodoModules from "./TodoModules";

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state),
    pageQuantity: selectors.getPageQuantity(state),
    isLogged: selectors.getUserStatus(state),
    currentPage: selectors.getCurrentPage(state)
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(actions.onLogOut()),
    checkUserStatus: () => dispatch(actions.onCheckUserStatus()),
    openEditTaskModal: taskData => dispatch(actions.onOpenEditTaskModal(taskData)),
    getTasksRequest: () => dispatch(actions.onGetTasksRequest()),
    sortFieldRequest: field => dispatch(actions.onSortFieldRequest(field)),
    changePage: page => dispatch(actions.onChangePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModules);