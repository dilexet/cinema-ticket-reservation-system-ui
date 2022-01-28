import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: {
        code: null,
        success: false,
        users: []
    },
    dataItem: {
        code: null,
        success: false,
        user: null
    },
    loading: false,
    error: null,
}

const userManagementSlice = createSlice({
    name: "user_management",
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
        get_users_loading(state) {
            state.loading = false;
            state.dataList = null;
            state.error = null;
        },
        get_users_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                users: action.payload.users
            };
            state.error = null;
        },
        get_users_error(state, action) {
            state.loading = false;
            state.dataList = null;
            state.error = action.payload;
        },

        get_user_by_id_loading(state) {
            state.loading = false;
            state.dataItem = null;
            state.error = null;
        },
        get_user_by_id_success(state, action) {
            state.loading = false;
            state.dataItem = {
                code: action.payload.code,
                success: action.payload.success,
                user: action.payload.user
            };
            state.error = null;
        },
        get_user_by_id_error(state, action) {
            state.loading = false;
            state.dataItem = null;
            state.error = action.payload;
        },
        create_user_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                users: [...state.dataList.users, action.payload.user]
            };
            state.error = null;
        },
        update_user_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                users: state.dataList.users.map(x =>
                    x.id !== action.payload.user.id ? x : action.payload.user)
            };
            state.error = null;
        },
        remove_user_success(state, action) {
            state.loading = false;
            state.dataList = {
                code: action.payload.code,
                success: action.payload.success,
                users: state.dataList.users.filter(x =>
                    x.id !== action.payload.id)
            };
            state.error = null;
        },

        change_users_error(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export default userManagementSlice.reducer;
export const {
    loading,
    clearError,
    get_users_loading,
    get_users_success,
    get_users_error,
    get_user_by_id_loading,
    get_user_by_id_success,
    get_user_by_id_error,
    create_user_success,
    update_user_success,
    remove_user_success,
    change_users_error
} = userManagementSlice.actions;