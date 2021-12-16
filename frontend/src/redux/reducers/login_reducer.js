import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';

const initialState = {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
    loading: false,
    response: null
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
                token: payload
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                response: payload
            };

        default:
            return state;
    }
}

export default login_reducer;