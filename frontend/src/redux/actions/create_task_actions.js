import { CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE } from '../types';
import axios from "axios";

export const createTask = (taskDetails) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_TASK_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.post('http://localhost:3002/usersystem/tasks/createTask', taskDetails, config);
		dispatch({ type: CREATE_TASK_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: CREATE_TASK_FAILURE, payload: error.response.data });
	}
};