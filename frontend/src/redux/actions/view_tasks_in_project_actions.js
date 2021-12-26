import { VIEW_TASKS_IN_PROJECT_REQUEST, VIEW_TASKS_IN_PROJECT_SUCCESS, VIEW_TASKS_IN_PROJECT_FAILURE } from '../types';
import axios from "axios";

export const getTasksInProject = (project_id) => async (dispatch) => {
	try {
		dispatch({ type: VIEW_TASKS_IN_PROJECT_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.post('http://localhost:3002/usersystem/projects/showTasksInProject', project_id, config);
		dispatch({ type: VIEW_TASKS_IN_PROJECT_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: VIEW_TASKS_IN_PROJECT_FAILURE, payload: error.response.data });
	}
};