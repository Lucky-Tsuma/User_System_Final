import { combineReducers } from "redux";
import login_reducer from "./login_reducer";
import registser_reducer from "./register_reducer";
import reset_password_reducer from "./reset_password_reducer";
import projects_reducer from "./projects_reducer";
import tasks_reducer from "./tasks_reducer";
import users_reducer from "./users_reducer";
import create_project_reducer from "./create_project_reducer";
import create_task_reducer from "./create_task_reducer";
import delete_project_reducer from "./delete_project_reducer";
import delete_task_reducer from "./delete_task_reducer";
import delete_user_reducer from "./delete_user_reducer";
import tasks_in_project_reducer from "./tasks_in_project_reducer";
import add_task_to_project_reducer from "./add_task_to_project_reducer";
import assign_project_reducer from "./assign_project_reducer";
import assign_task_reducer from "./assign_task_reducer";

const appReducer = combineReducers({
    login_reducer,
    registser_reducer,
    reset_password_reducer,
    projects_reducer,
    tasks_reducer,
    users_reducer,
    create_project_reducer,
    create_task_reducer,
    delete_user_reducer,
    delete_project_reducer,
    delete_task_reducer,
    tasks_in_project_reducer,
    add_task_to_project_reducer,
    assign_project_reducer,
    assign_task_reducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
      return appReducer(undefined, action)
    }
  
    return appReducer(state, action)
  }

export default rootReducer;