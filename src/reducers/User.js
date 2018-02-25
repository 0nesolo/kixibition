import {
    USER_LOGIN_SUBMITTED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_REQUEST_SUCCESS,
    USER_LOGIN_REQUEST_FAILURE,

    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_REQUEST_SUCCESS,
    USER_REGISTRATION_REQUEST_FAILURE
} from '../constants/User';

export default function (state = {}, action) {

    switch (action.type) {
        case USER_LOGIN_SUBMITTED:
            return Object.assign({}, state, {
                ...action.payload
            });

        default:
            return state;
    }
}