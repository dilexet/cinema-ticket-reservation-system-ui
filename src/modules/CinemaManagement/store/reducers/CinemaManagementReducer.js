import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        cinemas: []
    },
    dataItem: {
        code: null,
        success: false,
        cinema: null
    },
    loading: false,
    error: null,
}

const cinemaManagementSlice = createSlice({
    name: "cinema_management",
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
        get_cinemas_loading(state) {
            state.loading = false;
            state.dataList = null;
            state.error = null;
        },
        get_cinemas_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                cinemas: action.payload.cinemas
            };
            state.error = null;
        },
        get_cinemas_error(state, action) {
            state.loading = false;
            state.dataList = {
                code: null,
                success: false,
                cinemas: []
            };
            state.error = action.payload;
        },

        get_cinema_by_id_loading(state) {
            state.loading = false;
            state.dataItem = null;
            state.error = null;
        },
        get_cinema_by_id_success(state, action) {
            state.loading = false;
            state.dataItem = {
                code: action.payload.code,
                success: action.payload.success,
                cinema: action.payload.cinema
            };
            state.error = null;
        },
        get_cinema_by_id_error(state, action) {
            state.loading = false;
            state.dataItem = {
                code: null,
                success: false,
                cinema: null
            };
            state.error = action.payload;
        },
        create_cinema_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                cinemas: [...state.dataList?.cinemas, action.payload.cinema]
            };
            state.error = null;
        },
        update_cinema_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                cinemas: state.dataList.cinemas.map(x =>
                    x.id !== action.payload.cinema.id ? x : action.payload.cinema)
            };
            state.error = null;
        },
        remove_cinema_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                cinemas: state.dataList.cinemas.filter(x =>
                    x.id !== action.payload.id)
            };
            state.error = null;
        },

        change_cinemas_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default cinemaManagementSlice.reducer;
export const {
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
} = cinemaManagementSlice.actions;