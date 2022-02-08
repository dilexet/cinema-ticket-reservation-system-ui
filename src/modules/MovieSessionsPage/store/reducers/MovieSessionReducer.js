import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        sessions: [],
        movie: null
    },
    dataItem: {
        code: null,
        success: false,
        session: null,
        movie: null
    },
    loading: false,
    error: null,
}

const movieSessionSlice = createSlice({
    name: "movie-session",
    initialState: initialState,
    reducers: {
        get_sessions_loading(state) {
            state.loading = false;
            state.dataList = null;
            state.error = null;
        },
        get_sessions_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                sessions: action.payload.sessions,
                movie: action.payload?.movie
            };
            state.error = null;
        },
        get_sessions_error(state, action) {
            state.loading = false;
            state.dataList = {
                code: null,
                success: false,
                sessions: [],
                movie: null
            };
            state.error = action.payload;
        },
    }
})


export default movieSessionSlice.reducer;
export const {
    get_sessions_loading,
    get_sessions_success,
    get_sessions_error,
} = movieSessionSlice.actions;