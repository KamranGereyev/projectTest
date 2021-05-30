import { connect } from 'react-redux';
import * as selectors from './selector';
import Component from './MainPage.jsx';

const mapStateToProps = state => ({
    tasks: selectors.getTasks(state),
    isLogged: selectors.getUserStatus(state),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);