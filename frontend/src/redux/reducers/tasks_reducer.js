import { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    status: null
};

const tasks_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case TASKS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case TASKS_FAILURE:
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

export default tasks_reducer;