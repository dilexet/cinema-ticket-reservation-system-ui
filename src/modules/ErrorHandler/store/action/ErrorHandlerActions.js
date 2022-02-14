import {
    authenticate_loading,
    authenticate_success,
    authenticate_error,
    api_error
} from "../reducers/ErrorHandlerReducer"

export const authenticateAsyncAction = (result) => {
    return async (dispatch) => {
        dispatch(authenticate_loading())

        if (result === true) {
            dispatch(authenticate_success())
        } else if (result === false) {
            dispatch(authenticate_error())
        }
    }
}

export const errorHandleAction = (code, messages) => {
    return async (dispatch) => {
        dispatch(api_error({code: code, messages: messages}))
    }
}