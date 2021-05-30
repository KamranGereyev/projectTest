import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Wrapper } from "./styledComponent";
import LoginPage from "modules/LoginPage";
import Modals from "../Modals";
import TodoModules from "modules/TodoModules";

const MainPage = props => {
    const { isLogged } = props;

    return(
        <Router>
        <Switch>
            <Wrapper>
                <Route exact path="/" component={TodoModules}/>
                <Route path="/login">
                    {isLogged ? <Redirect to="/" /> : <LoginPage />}
                </Route>
                <Modals/>
            </Wrapper>
        </Switch>
    </Router>
    )
};

export default React.memo(MainPage);