import { combineReducers } from "redux";
import todoModules from "../../manager/todoModules/reducer";
import loginPage from "../../manager/loginPage/reducer";
import modals from "../../manager/modals/reducer";

export default combineReducers({
    todoModules, loginPage, modals
});