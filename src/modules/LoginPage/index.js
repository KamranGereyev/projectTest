import { connect } from "react-redux";
import * as actions from "./action";
import LoginPage from "./LoginPage";

const mapDispatchToProps = dispatch => ({
    signInRequest: (userData) => dispatch(actions.onSignInRequest(userData))
});

export default connect(null, mapDispatchToProps)(LoginPage);