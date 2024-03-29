import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';

const initialState = {
    loading: false,
    status: null
};

const registser_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                response: payload.message,
                status: payload.success
            };

        case REGISTER_FAILURE:
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

export default registser_reducer;