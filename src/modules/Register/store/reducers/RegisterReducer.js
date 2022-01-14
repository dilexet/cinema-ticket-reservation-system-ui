import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: false,
    error: [],
}

const registerSlice = createSlice({
    name: "register",
    initialState: initialState,
    reducers: {
        register_loading(state) {
            state.loading = true;
            state.data = null;
            state.error = null;
        },
        register_success(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        register_error(state, action) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        }
    }
})

export default registerSlice.reducer;
export const {register_loading, register_success, register_error} = registerSlice.actions;
