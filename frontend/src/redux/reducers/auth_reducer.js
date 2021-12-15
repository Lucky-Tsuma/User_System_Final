import { REGISTER, LOGIN, RESET_PASSWORD } from "../types";

const initialState = [];

const auth_reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case REGISTER:
            return [ ...state, payload ];

        case LOGIN:
            console.log(state);
            return [ ...state, payload ];

        case RESET_PASSWORD:
            return [ ...state, payload];

        default:
            return state;
    }
}

export default auth_reducer;