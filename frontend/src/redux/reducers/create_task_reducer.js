import { CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const create_task_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case CREATE_TASK_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CREATE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case CREATE_TASK_FAILURE:
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

export default create_task_reducer;