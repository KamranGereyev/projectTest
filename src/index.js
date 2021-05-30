import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import rootReducer from "./root/rootReducer/rootReducer";
import logger from "redux-logger";
import { watchRootSaga } from "./root/rootReducer/rootSaga";

function init() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
    window.store = store;

    sagaMiddleware.run(watchRootSaga);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

init();
