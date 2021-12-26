import { VIEW_TASKS_IN_PROJECT_REQUEST, VIEW_TASKS_IN_PROJECT_SUCCESS, VIEW_TASKS_IN_PROJECT_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    status: null,
    response: []
};

const tasks_in_project_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case VIEW_TASKS_IN_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case VIEW_TASKS_IN_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case VIEW_TASKS_IN_PROJECT_FAILURE:
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

export default tasks_in_project_reducer;