import { ASSIGN_TASK_REQUEST, ASSIGN_TASK_SUCCESS, ASSIGN_TASK_FAILURE } from '../types';
import axios from "axios";

export const assignTask = (userAndTask) => async (dispatch) => {
	try {
		dispatch({ type: ASSIGN_TASK_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
        const result = await axios.post('http://localhost:3002/usersystem/tasks/assignTask', userAndTask, config);
		dispatch({ type: ASSIGN_TASK_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: ASSIGN_TASK_FAILURE, payload: error.response.data });
	}
};