import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from '../types';
import axios from "axios";

export const resetPassword = (userDetails) => async (dispatch) => {
	try {
		dispatch({ type: RESET_PASSWORD_REQUEST });
		const result = await axios.post('http://localhost:3001/usersystem/auth/resetPassword', userDetails);
		dispatch({ type: RESET_PASSWORD_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: RESET_PASSWORD_FAILURE, payload: error.response.data });
	}
};







