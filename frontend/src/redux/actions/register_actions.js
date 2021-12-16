import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';
import axios from "axios";

export const registerUser = (userDetails) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_REQUEST });
		const result = await axios.post('http://localhost:3001/usersystem/user/registerUser', userDetails);
		dispatch({ type: REGISTER_SUCCESS, payload: result.data.message });
	} catch (error) {
		dispatch({ type: REGISTER_FAILURE, payload: error.response.data.message });
	}
};

