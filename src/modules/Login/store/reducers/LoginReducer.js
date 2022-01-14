import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: null,
    loading: false,
    error: [],
}

const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        login_loading(state) {
            state.loading = true;
            state.data = null;
            state.error = null;
        },
        login_success(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        login_error(state, action) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const {login_loading, login_success, login_error} = loginSlice.actions;