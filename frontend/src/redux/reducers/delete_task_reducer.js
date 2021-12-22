import { DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const delete_task_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case DELETE_TASK_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case DELETE_TASK_FAILURE:
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

export default delete_task_reducer;