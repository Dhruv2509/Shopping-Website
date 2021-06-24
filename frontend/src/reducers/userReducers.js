import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"

export const userLoginReducer = (state = {  }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loding: true}
        case USER_LOGIN_SUCCESS:
            return { loding: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:  
            return { loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {  }, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loding: true}
        case USER_REGISTER_SUCCESS:
            return { loding: false, userInfo: action.payload}
        case USER_REGISTER_FAIL:  
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loding: true}
        case USER_DETAILS_SUCCESS:
            return { loding: false, user: action.payload}
        case USER_DETAILS_FAIL:  
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {  loding: true}
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loding: false, success: true, userInfo: action.payload}
        case USER_UPDATE_PROFILE_FAIL:  
            return { loading: false, error: action.payload}
        default:
            return state
    }
}