import { CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from '../types';
import axios from "axios";

export const createProject = (projectDetails) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_PROJECT_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.post('http://localhost:3002/usersystem/projects/createProject', projectDetails, config);
		dispatch({ type: CREATE_PROJECT_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: CREATE_PROJECT_FAILURE, payload: error.response.data });
	}
};