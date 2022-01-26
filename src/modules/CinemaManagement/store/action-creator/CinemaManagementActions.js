import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {CinemaManagementURL} from "../../../Shared/constants/BaseURLs";
import {
    loading,
    clearError,
    get_cinemas_loading,
    get_cinemas_success,
    get_cinemas_error,
    get_cinema_by_id_loading,
    get_cinema_by_id_success,
    get_cinema_by_id_error,
    create_cinema_success,
    update_cinema_success,
    remove_cinema_success,
    change_cinemas_error
} from "../reducers/CinemaManagementReducer"

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const getCinemas = () => {
    return async (dispatch) => {
        dispatch(get_cinemas_loading())

        try {
            const response = await defaultApi(CinemaManagementURL).get()
            dispatch(get_cinemas_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_cinemas_error(error.response.data))
            }
        }
    }
}

export const createCinema = (data) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(CinemaManagementURL).post(data)
            dispatch(create_cinema_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_cinemas_error(error.response.data))
            }
        }
    }
}

export const updateCinema = (data, id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(CinemaManagementURL).update(data, id);
            dispatch(update_cinema_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_cinemas_error(error.response.data))
            }
        }
    }
}

export const deleteCinema = (id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(CinemaManagementURL).delete(id);
            dispatch(remove_cinema_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_cinemas_error(error.response.data))
            }
        }
    }
}

export const getCinemaById = (id) => {
    return async (dispatch) => {
        dispatch(get_cinema_by_id_loading())

        try {
            const response = await defaultApi(CinemaManagementURL).getById(id);
            dispatch(get_cinema_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_cinema_by_id_error(error.response.data))
            }
        }
    }
}