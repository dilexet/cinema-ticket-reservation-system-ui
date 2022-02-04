import {
    clearError,
    get_list_movie_titles_loading,
    get_list_movie_titles_success,
    get_list_movie_titles_error,
    get_list_cinema_names_loading,
    get_list_cinema_names_success,
    get_list_cinema_names_error,
    get_list_city_names_loading,
    get_list_city_names_success,
    get_list_city_names_error,
} from "../reducers/MovieReducer"
import {movieAPI} from "./MovieAPI";
import {
    get_movies_error,
    get_movies_loading,
    get_movies_success
} from "../../../MovieManagement/store/reducers/MovieManagementReducer";
import {
    get_sessions_loading,
    get_sessions_success,
    get_sessions_error
} from "../../../SessionManagement/store/reducers/SessionManagementReducer";

export const clearErrors = () => {
    return (dispatch) => {
        dispatch(clearError())
    }
}

export const getMoviesByFilter = (params) => {
    return async (dispatch) => {
        dispatch(get_movies_loading())

        try {
            const response = await movieAPI().get_movies_by_filter(params)
            dispatch(get_movies_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_movies_error(error.response.data))
            }
        }
    }
}

export const getSessionsForMovie = (id) => {
    return async (dispatch) => {
        dispatch(get_sessions_loading())

        try {
            const response = await movieAPI().get_sessions_for_movie(id)
            dispatch(get_sessions_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_sessions_error(error.response.data))
            }
        }
    }
}

export const getListMovieTitles = (searchQuery) => {
    return async (dispatch) => {
        dispatch(get_list_movie_titles_loading())

        const params = {
            'searchQuery': searchQuery
        }
        try {
            const response = await movieAPI().get_list_movie_titles(params)
            dispatch(get_list_movie_titles_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_list_movie_titles_error(error.response.data))
            }
        }
    }
}

export const getListCinemaNames = (searchQuery) => {
    return async (dispatch) => {
        dispatch(get_list_cinema_names_loading())

        const params = {
            'searchQuery': searchQuery
        }
        try {
            const response = await movieAPI().get_list_cinema_names(params)
            dispatch(get_list_cinema_names_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_list_cinema_names_error(error.response.data))
            }
        }
    }
}

export const getListCityNames = (searchQuery) => {
    return async (dispatch) => {
        dispatch(get_list_city_names_loading())

        const params = {
            'searchQuery': searchQuery
        }
        try {
            const response = await movieAPI().get_list_city_names(params)
            dispatch(get_list_city_names_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(get_list_city_names_error(error.response.data))
            }
        }
    }
}