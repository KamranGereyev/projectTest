import { takeEvery, call, put } from "redux-saga/effects";
import constants from "../../constants";
import * as api from "../../REST";
import * as actions from "./action";
import formDataCreator from "../../utils/formDataCreator";

export function* watchHeaderModule() {
  yield takeEvery(constants.ADD_TASK_REQUEST, workerAddTask);
}

function* workerAddTask(action) {
  try {
    const formData = yield call(formDataCreator, action.payload);
    const response = yield call(api.addTask, formData);

    if (response.status === 'ok') {
      yield put(actions.onGetTasksRequest());
    }
  } catch (err) {
    console.error('ERROR', err);
  }
}
