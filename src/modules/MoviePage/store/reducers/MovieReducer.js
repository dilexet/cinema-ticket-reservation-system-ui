import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    movieTitlesState: {
        code: null,
        success: false,
        listOfTitles: null
    },
    cinemaNamesState: {
        code: null,
        success: false,
        listOfTitles: null
    },
    cityNamesState: {
        code: null,
        success: false,
        listOfTitles: null
    },
    loading: false,
    error: null,
}

const movieFilterSlice = createSlice({
    name: "movie-filter",
    initialState: initialState,
    reducers: {
        clearError(state) {
            state.loading = false;
            state.error = null;
        },

        get_list_movie_titles_loading(state) {
            state.loading = true;
            state.movieTitlesState = null;
            state.error = null;
        },
        get_list_movie_titles_success(state, action) {
            state.loading = true;
            state.movieTitlesState = {
                code: action.payload.code,
                success: action.payload.success,
                listOfTitles: action.payload.listOfTitles
            };
            state.error = null;
        },
        get_list_movie_titles_error(state, action) {
            state.loading = true;
            state.movieTitlesState = {
                code: null,
                success: false,
                listOfTitles: null
            };
            state.error = action.payload;
        },

        get_list_cinema_names_loading(state) {
            state.loading = true;
            state.cinemaNamesState = null;
            state.error = null;
        },
        get_list_cinema_names_success(state, action) {
            state.loading = true;
            state.cinemaNamesState = {
                code: action.payload.code,
                success: action.payload.success,
                listOfTitles: action.payload.listOfTitles
            };
            state.error = null;
        },
        get_list_cinema_names_error(state, action) {
            state.loading = true;
            state.cinemaNamesState = {
                code: null,
                success: false,
                listOfTitles: null
            };
            state.error = action.payload;
        },

        get_list_city_names_loading(state) {
            state.loading = true;
            state.cityNamesState = null;
            state.error = null;
        },
        get_list_city_names_success(state, action) {
            state.loading = true;
            state.cityNamesState = {
                code: action.payload.code,
                success: action.payload.success,
                listOfTitles: action.payload.listOfTitles
            };
            state.error = null;
        },
        get_list_city_names_error(state, action) {
            state.loading = true;
            state.cityNamesState = {
                code: null,
                success: false,
                listOfTitles: null
            };
            state.error = action.payload;
        },
    }
})


export default movieFilterSlice.reducer;
export const {
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

} = movieFilterSlice.actions;