import {authenticate_loading, authenticate_success, authenticate_error} from "../reducers/AuthenticateReducer"

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