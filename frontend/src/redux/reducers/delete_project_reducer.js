import { DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const delete_project_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case DELETE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case DELETE_PROJECT_FAILURE:
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

export default delete_project_reducer;