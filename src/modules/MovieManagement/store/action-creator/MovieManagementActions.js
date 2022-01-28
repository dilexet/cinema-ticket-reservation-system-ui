import {defaultApi} from "../../../Shared/constants/DefaultApi";
import {MovieManagementURL} from "../../../Shared/constants/BaseURLs";
import {
    loading,
    clearError,
    get_movies_loading,
    get_movies_success,
    get_movies_error,
    get_movie_by_id_loading,
    get_movie_by_id_success,
    get_movie_by_id_error,
    create_movie_success,
    update_movie_success,
    remove_movie_success,
    change_movies_error
} from "../reducers/MovieManagementReducer"

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const getMovies = () => {
    return async (dispatch) => {
        dispatch(get_movies_loading())

        try {
            const response = await defaultApi(MovieManagementURL).get()
            dispatch(get_movies_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_movies_error(error.response.data))
            }
        }
    }
}

export const getMovieById = (id) => {
    return async (dispatch) => {
        dispatch(get_movie_by_id_loading())

        try {
            const response = await defaultApi(MovieManagementURL).getById(id);
            dispatch(get_movie_by_id_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_movie_by_id_error(error.response.data))
            }
        }
    }
}

export const createMovie = (data) => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            const response = await defaultApi(MovieManagementURL).post(data)
            dispatch(create_movie_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_movies_error(error.response.data))
            }
        }
    }
}

export const updateMovie = (data, id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(MovieManagementURL).update(data, id);
            dispatch(update_movie_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_movies_error(error.response.data))
            }
        }
    }
}

export const deleteMovie = (id) => {
    return async (dispatch) => {
        dispatch(loading())

        try {
            const response = await defaultApi(MovieManagementURL).delete(id);
            dispatch(remove_movie_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(change_movies_error(error.response.data))
            }
        }
    }
}