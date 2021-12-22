import { PROJECTS_REQUEST, PROJECTS_SUCCESS, PROJECTS_FAILURE } from '../types';

const initialState = {
    loading: false,
    error: null,
    status: null,
    response:[]
};

const projects_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case PROJECTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case PROJECTS_FAILURE:
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

export default projects_reducer;