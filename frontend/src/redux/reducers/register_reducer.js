import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';

const initialState = [];

const registser_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case REGISTER_REQUEST:
            return [];

        case REGISTER_SUCCESS:
            return [];

        case REGISTER_FAILURE:
            return [];

        default:
            return state;
    }
}

export default registser_reducer;