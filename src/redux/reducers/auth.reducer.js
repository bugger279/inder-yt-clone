import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType";

const initialState = {
    accessToken: sessionStorage.getItem('inder-access-token') ? sessionStorage.getItem('inder-access-token') : null,
    user: sessionStorage.getItem('inder-user') ? JSON.parse(sessionStorage.getItem('inder-user')) : null,
    loading: false,
};

export const authReducer = (prevState = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false,
            }
        
        case LOGIN_FAIL:
            return {
                ...prevState,
                error: payload,
                loading: false,
            }
        
        case LOAD_PROFILE:
            return {
                ...prevState,
                user: payload,
            }
        
        case LOG_OUT:
            return {
                ...prevState,
                accessToken: null,
                user: null
            }

        default: return prevState;
    }
}