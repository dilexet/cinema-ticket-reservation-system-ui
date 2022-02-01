import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {SessionManagementURL} from "../../../Shared/constants/BaseURLs";
import {
    loading,
    clearError,
    get_sessions_loading,
    get_sessions_success,
    get_sessions_error,
    get_session_by_id_loading,
    get_session_by_id_success,
    get_session_by_id_error,
    create_session_success,
    update_session_success,
    remove_session_success,
    change_sessions_error
} from "../reducers/SessionManagementReducer"

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const getSessions = () => {
    return async (dispatch) => {
        dispatch(get_sessions_loading())

        try {
            const response = await defaultApi(SessionManagementURL).get()
            dispatch(get_sessions_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_sessions_error(error.response.data))
            }
        }
    }
}

export const createSession = (data) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(SessionManagementURL).post(data)
            dispatch(create_session_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_sessions_error(error.response.data))
            }
        }
    }
}

export const updateSession = (data, id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(SessionManagementURL).update(data, id);
            dispatch(update_session_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_sessions_error(error.response.data))
            }
        }
    }
}

export const deleteSession = (id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(SessionManagementURL).delete(id);
            dispatch(remove_session_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_sessions_error(error.response.data))
            }
        }
    }
}

export const getSessionById = (id) => {
    return async (dispatch) => {
        dispatch(get_session_by_id_loading())

        try {
            const response = await defaultApi(SessionManagementURL).getById(id);
            dispatch(get_session_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_session_by_id_error(error.response.data))
            }
        }
    }
}