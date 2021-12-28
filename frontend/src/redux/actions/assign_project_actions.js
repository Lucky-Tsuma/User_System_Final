import { ASSIGN_PROJECT_REQUEST, ASSIGN_PROJECT_SUCCESS, ASSIGN_PROJECT_FAILURE } from '../types';
import axios from "axios";

export const assignProject = (userAndProject) => async (dispatch) => {
	try {
		dispatch({ type: ASSIGN_PROJECT_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
        const result = await axios.post('http://localhost:3002/usersystem/projects/assignProject', userAndProject, config);
		dispatch({ type: ASSIGN_PROJECT_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: ASSIGN_PROJECT_FAILURE, payload: error.response.data });
	}
};