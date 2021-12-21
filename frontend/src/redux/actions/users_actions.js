import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from '../types';
import axios from "axios";

export const getUsers = () => async (dispatch) => {
	try {
		dispatch({ type: USERS_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.get('http://localhost:3001/usersystem/user/showUsers', config);
		dispatch({ type: USERS_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: USERS_FAILURE, payload: error.response.data });
	}
};