import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const delete_user_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case DELETE_USER_FAILURE:
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

export default delete_user_reducer;