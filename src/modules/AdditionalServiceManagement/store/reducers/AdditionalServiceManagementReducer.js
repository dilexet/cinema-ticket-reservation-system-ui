import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        additionalServices: []
    },
    dataItem: {
        code: null,
        success: false,
        additionalService: null
    },
    loading: false,
    error: null,
}

const additionalServiceManagementSlice = createSlice({
    name: "additionalService_management",
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
        get_additionalServices_loading(state) {
            state.loading = false;
            state.dataList = null;
            state.error = null;
        },
        get_additionalServices_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                additionalServices: action.payload.additionalServices
            };
            state.error = null;
        },
        get_additionalServices_error(state, action) {
            state.loading = false;
            state.dataList = null;
            state.error = action.payload;
        },

        get_additionalService_by_id_loading(state) {
            state.loading = false;
            state.dataItem = null;
            state.error = null;
        },
        get_additionalService_by_id_success(state, action) {
            state.loading = false;
            state.dataItem = {
                code: action.payload.code,
                success: action.payload.success,
                additionalService: action.payload.additionalService
            };
            state.error = null;
        },
        get_additionalService_by_id_error(state, action) {
            state.loading = false;
            state.dataItem = null;
            state.error = action.payload;
        },
        create_additionalService_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                additionalServices: [...state.dataList.additionalServices, action.payload.additionalService]
            };
            state.error = null;
        },
        update_additionalService_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                additionalServices: state.dataList.additionalServices.map(x =>
                    x.id !== action.payload.additionalService.id ? x : action.payload.additionalService)
            };
            state.error = null;
        },
        remove_additionalService_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                additionalServices: state.dataList.additionalServices.filter(x =>
                    x.id !== action.payload.id)
            };
            state.error = null;
        },

        change_additionalServices_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default additionalServiceManagementSlice.reducer;
export const {
    loading,
    clearError,
    get_additionalServices_loading,
    get_additionalServices_success,
    get_additionalServices_error,
    get_additionalService_by_id_loading,
    get_additionalService_by_id_success,
    get_additionalService_by_id_error,
    create_additionalService_success,
    update_additionalService_success,
    remove_additionalService_success,
    change_additionalServices_error
} = additionalServiceManagementSlice.actions;