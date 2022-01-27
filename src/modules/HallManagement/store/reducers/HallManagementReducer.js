import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        halls: []
    },
    dataItem: {
        code: null,
        success: false,
        hall: null
    },
    loading: false,
    error: null,
}

const hallManagementSlice = createSlice({
    name: "hall_management",
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
        get_halls_loading(state) {
            state.loading = false;
            state.dataList = null;
            state.error = null;
        },
        get_halls_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                halls: action.payload.halls
            };
            state.error = null;
        },
        get_halls_error(state, action) {
            state.loading = false;
            state.dataList = null;
            state.error = action.payload;
        },

        get_hall_by_id_loading(state) {
            state.loading = false;
            state.dataItem = null;
            state.error = null;
        },
        get_hall_by_id_success(state, action) {
            state.loading = false;
            state.dataItem = {
                code: action.payload.code,
                success: action.payload.success,
                hall: action.payload.hall
            };
            state.error = null;
        },
        get_hall_by_id_error(state, action) {
            state.loading = false;
            state.dataItem = null;
            state.error = action.payload;
        },
        create_hall_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                halls: [...state.dataList.halls, action.payload.hall]
            };
            state.error = null;
        },
        update_hall_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                halls: state.dataList.halls.map(x =>
                    x.id !== action.payload.hall.id ? x : action.payload.hall)
            };
            state.error = null;
        },
        remove_hall_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                halls: state.dataList.halls.filter(x =>
                    x.id !== action.payload.id)
            };
            state.error = null;
        },

        change_halls_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default hallManagementSlice.reducer;
export const {
    loading,
    clearError,
    get_halls_loading,
    get_halls_success,
    get_halls_error,
    get_hall_by_id_loading,
    get_hall_by_id_success,
    get_hall_by_id_error,
    create_hall_success,
    update_hall_success,
    remove_hall_success,
    change_halls_error
} = hallManagementSlice.actions;