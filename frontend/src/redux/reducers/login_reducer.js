import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';

const initialState = {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
    loading: false,
    error: null,
    status: null,
    userDetails: {}
};

const login_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: payload.message,
                userDetails: payload.userDetails,
                status: payload.success
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.message,
                status: payload.success
            };

        default:
            return state;
    }
}

export default login_reducer;