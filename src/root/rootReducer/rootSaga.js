import { all, call } from "redux-saga/effects";
import { watchTodoModule } from "manager/todoModules/saga";
import { watchHeaderModule } from "manager/header/saga";
import { watchLoginModule } from "manager/loginPage/saga";
import { watchModals } from "manager/modals/saga";

const sagaList = [
    watchTodoModule, watchHeaderModule, watchLoginModule, watchModals
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
