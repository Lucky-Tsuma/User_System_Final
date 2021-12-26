import { ADD_TASK_TO_PROJECT_REQUEST, ADD_TASK_TO_PROJECT_SUCCESS, ADD_TASK_TO_PROJECT_FAILURE } from '../types';
import axios from "axios";

export const addTaskToProject = (projectAndTask) => async (dispatch) => {
	try {
		dispatch({ type: ADD_TASK_TO_PROJECT_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
        const result = await axios.post('http://localhost:3002/usersystem/tasks/addTaskToProject', projectAndTask, config);
		dispatch({ type: ADD_TASK_TO_PROJECT_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: ADD_TASK_TO_PROJECT_FAILURE, payload: error.response.data });
	}
};