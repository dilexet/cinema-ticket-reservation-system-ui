import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        sessions: []
    },
    dataItem: {
        code: null,
        success: false,
        session: null
    },
    loading: false,
    error: null,
}

const sessionManagementSlice = createSlice({
    name: "session_management",
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
                sessions: action.payload.sessions
            };
            state.error = null;
        },
        get_sessions_error(state, action) {
            state.loading = false;
            state.dataList = {
                code: null,
                success: false,
                sessions: []
            };
            state.error = action.payload;
        },

        get_session_by_id_loading(state) {
            state.loading = false;
            state.dataItem = null;
            state.error = null;
        },
        get_session_by_id_success(state, action) {
            state.loading = false;
            state.dataItem = {
                code: action.payload.code,
                success: action.payload.success,
                session: action.payload.session
            };
            state.error = null;
        },
        get_session_by_id_error(state, action) {
            state.loading = false;
            state.dataItem = {
                code: null,
                success: false,
                session: null
            };
            state.error = action.payload;
        },
        create_session_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                sessions: [...state.dataList?.sessions, action.payload.session]
            };
            state.error = null;
        },
        update_session_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                sessions: state.dataList.sessions.map(x =>
                    x.id !== action.payload.session.id ? x : action.payload.session)
            };
            state.error = null;
        },
        remove_session_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                sessions: state.dataList.sessions.filter(x =>
                    x.id !== action.payload.id)
            };
            state.error = null;
        },

        change_sessions_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default sessionManagementSlice.reducer;
export const {
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
} = sessionManagementSlice.actions;