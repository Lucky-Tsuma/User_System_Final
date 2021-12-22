import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from '../types';
import axios from "axios";
import { getUsers } from './users_actions';

export const deleteUser = (userId) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_USER_REQUEST });

        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            }
        }
		const result = await axios.post('http://localhost:3001/usersystem/user/deleteUser', userId, config);
		dispatch({ type: DELETE_USER_SUCCESS, payload: result.data });
		dispatch(getUsers());
	} catch (error) {
		dispatch({ type: DELETE_USER_FAILURE, payload: error.response.data });
	}
};