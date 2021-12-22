import { CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    response: null,
    status: null,
};

const create_project_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case CREATE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case CREATE_PROJECT_FAILURE:
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

export default create_project_reducer;