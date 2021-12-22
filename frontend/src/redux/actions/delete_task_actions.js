import { DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE } from '../types';
import axios from "axios";
import { getTasks } from './tasks_actions';

export const deleteTask = (taskId) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_TASK_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.post('http://localhost:3002/usersystem/tasks/deleteTask', taskId, config);
		dispatch({ type: DELETE_TASK_SUCCESS, payload: result.data });
		dispatch(getTasks());
	} catch (error) {
		dispatch({ type: DELETE_TASK_FAILURE, payload: error.response.data });
	}
};