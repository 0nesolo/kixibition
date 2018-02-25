import {
    USER_LOGIN_SUBMITTED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_REQUEST_SUCCESS,
    USER_LOGIN_REQUEST_FAILURE,

    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_REQUEST_SUCCESS,
    USER_REGISTRATION_REQUEST_FAILURE
} from '../constants/User';

/**
 * User Logging In
 * @param {Object} cred
 */
export function userLoggingIn (cred) {
    return {
        type: USER_LOGIN_SUBMITTED,
        payload: { ...cred }
    }
}