import { combineReducers } from "redux";
import login_reducer from "./login_reducer";
import registser_reducer from "./register_reducer";
import reset_password_reducer from "./reset_password_reducer";

const rootReducer = combineReducers({
    login_reducer,
    registser_reducer,
    reset_password_reducer
});

export default rootReducer;