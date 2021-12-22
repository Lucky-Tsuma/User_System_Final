import { DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE } from '../types';
import axios from "axios";
import { getProjects } from './projects_actions';

export const deleteProject = (project_id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_PROJECT_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.post('http://localhost:3002/usersystem/projects/deleteProject', project_id, config);
		dispatch({ type: DELETE_PROJECT_SUCCESS, payload: result.data });
		dispatch(getProjects())
	} catch (error) {
		dispatch({ type: DELETE_PROJECT_FAILURE, payload: error.response.data });
	}
};