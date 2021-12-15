import { REGISTER, LOGIN, RESET_PASSWORD } from '../types';

export const registerUser = (payload) => {
    return {
        type: REGISTER,
        payload
    }
}

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const resetPassword = (payload) => {
    return {
        type: RESET_PASSWORD,
        payload
    }
}