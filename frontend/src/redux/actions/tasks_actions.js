import { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } from '../types';
import axios from "axios";

export const getTasks = () => async (dispatch) => {
	try {
		dispatch({ type: TASKS_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.get('http://localhost:3002/usersystem/tasks/showTasks', config);
		dispatch({ type: TASKS_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: TASKS_FAILURE, payload: error.response.data });
	}
};