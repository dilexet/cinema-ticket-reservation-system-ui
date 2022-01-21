import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        movies: []
    },
    dataItem: {
        code: null,
        success: false,
        movies: null
    },
    loading: false,
    error: null,
}

const movieManagementSlice = createSlice({
    name: "movie_management",
    initialState: initialState,
    reducers: {
        loading(state) {
            state.loading = true;
            state.error = null;
        },
        clearError(state) {
            state.loading = false;
            state.error = null;
        },
        get_movies_loading(state) {
            state.loading = false;
            state.dataList = null;
            state.error = null;
        },
        get_movies_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                movies: action.payload.movies
            };
            state.error = null;
        },
        get_movies_error(state, action) {
            state.loading = false;
            state.dataList = null;
            state.error = action.payload;
        },

        get_movie_by_id_loading(state) {
            state.loading = false;
            state.dataItem = null;
            state.error = null;
        },
        get_movie_by_id_success(state, action) {
            state.loading = false;
            state.dataItem = {
                code: action.payload.code,
                success: action.payload.success,
                movie: action.payload.movie
            };
            state.error = null;
        },
        get_movie_by_id_error(state, action) {
            state.loading = false;
            state.dataItem = null;
            state.error = action.payload;
        },
        create_movie_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                movies: [...state.dataList.movies, action.payload.movie]
            };
            state.error = null;
        },
        update_movie_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                movies: state.dataList.movies.map(x =>
                    x.id !== action.payload.movie.id ? x : action.payload.movie)
            };
            state.error = null;
        },
        remove_movie_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                movies: state.dataList.movies.filter(x =>
                    x.id !== action.payload.id)
            };
            state.error = null;
        },

        change_movies_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default movieManagementSlice.reducer;
export const {
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
} = movieManagementSlice.actions;