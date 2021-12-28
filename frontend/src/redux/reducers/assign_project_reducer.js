import { ASSIGN_PROJECT_REQUEST, ASSIGN_PROJECT_SUCCESS, ASSIGN_PROJECT_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const assign_project_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ASSIGN_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ASSIGN_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case ASSIGN_PROJECT_FAILURE:
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

export default assign_project_reducer;