import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';
import axios from "axios";

export const login = (loginDetails) => async (dispatch, getState) => {
	try {
		dispatch({ type: LOGIN_REQUEST });
		const result = await axios.post('http://localhost:3001/usersystem/auth/login', loginDetails);
		sessionStorage.setItem('token', result.data.message);
		sessionStorage.setItem('user', JSON.stringify(result.data.userDetails));
		dispatch({ type: LOGIN_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
	}
};