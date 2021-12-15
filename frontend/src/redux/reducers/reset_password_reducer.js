import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from '../types';

const initialState = [];

const reset_password_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case RESET_PASSWORD_REQUEST:
            return [];

        case RESET_PASSWORD_SUCCESS:
            return [];

        case RESET_PASSWORD_FAILURE:
            return [];

        default:
            return state;
    }
}

export default reset_password_reducer;