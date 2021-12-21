import { PROJECTS_REQUEST, PROJECTS_SUCCESS, PROJECTS_FAILURE } from '../types';
import axios from "axios";

export const getProjects = () => async (dispatch) => {
	try {
		dispatch({ type: PROJECTS_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.get('http://localhost:3002/usersystem/projects/showProjects', config);
		dispatch({ type: PROJECTS_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: PROJECTS_FAILURE, payload: error.response.data });
	}
};