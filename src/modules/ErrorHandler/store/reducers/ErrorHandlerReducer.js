import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    error: {
        code: 0,
        messages: [],
    },
    isAuthenticate: null,
    loading: false,
}

const errorHandlerSlice = createSlice({
    name: "error-handler",
    initialState: initialState,
    reducers: {
        authenticate_loading(state) {
            state.loading = true;
            state.isAuthenticate = null;
        },
        authenticate_success(state) {
            state.loading = false;
            state.isAuthenticate = true;
        },
        authenticate_error(state) {
            state.loading = false;
            state.isAuthenticate = false;
        },
        api_error(state, action) {
            state.error = {
                code: action?.payload?.code,
                messages: action?.payload?.messages
            }
        }
    }
})

export default errorHandlerSlice.reducer;
export const {
    authenticate_loading, authenticate_success, authenticate_error,
    api_error
} = errorHandlerSlice.actions;