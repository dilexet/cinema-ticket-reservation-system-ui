import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isAuthenticate: null,
    loading: false,
}

const authenticateSlice = createSlice({
    name: "authenticate",
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
        }
    }
})

export default authenticateSlice.reducer;
export const {authenticate_loading, authenticate_success, authenticate_error} = authenticateSlice.actions;