import { ASSIGN_TASK_REQUEST, ASSIGN_TASK_SUCCESS, ASSIGN_TASK_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const assign_task_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ASSIGN_TASK_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ASSIGN_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case ASSIGN_TASK_FAILURE:
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

export default assign_task_reducer;