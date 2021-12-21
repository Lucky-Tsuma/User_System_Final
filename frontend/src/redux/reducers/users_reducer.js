import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    status: null
};

const users_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case USERS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case USERS_FAILURE:
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

export default users_reducer;