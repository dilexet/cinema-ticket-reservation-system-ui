import {
    get_sessions_error,
    get_sessions_loading,
    get_sessions_success
} from "../reducers/MovieSessionReducer";
import {sessionAPI} from "./SessionAPI";

export const getSessionsForMovie = (id) => {
    return async (dispatch) => {
        dispatch(get_sessions_loading())

        try {
            const response = await sessionAPI().get_sessions_for_movie(id)
            dispatch(get_sessions_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_sessions_error(error.response.data))
            }
        }
    }
}