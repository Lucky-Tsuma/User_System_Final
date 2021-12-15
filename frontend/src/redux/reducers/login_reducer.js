import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';

const initialState = [];

const login_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_REQUEST:
            return [];

        case LOGIN_SUCCESS:
            return [];

        case LOGIN_FAILURE:
            return [];

        default:
            return state;
    }
}

export default login_reducer;