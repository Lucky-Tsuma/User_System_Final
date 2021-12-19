import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';

const initialState = {
    loading: false
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
                response: payload.message
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.message
            };

        default:
            return state;
    }
}

export default registser_reducer;