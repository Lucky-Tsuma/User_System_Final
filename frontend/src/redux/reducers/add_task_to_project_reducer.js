import { ADD_TASK_TO_PROJECT_REQUEST, ADD_TASK_TO_PROJECT_SUCCESS, ADD_TASK_TO_PROJECT_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const add_task_to_project_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_TASK_TO_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ADD_TASK_TO_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case ADD_TASK_TO_PROJECT_FAILURE:
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

export default add_task_to_project_reducer;