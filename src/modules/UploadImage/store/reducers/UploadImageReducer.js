import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: null,
    loading: false,
    error: null,
}

const uploadImageSlice = createSlice({
    name: "upload-image",
    initialState: initialState,
    reducers: {
        upload_image_loading(state) {
            state.loading = true;
            state.data = null;
            state.error = null;
        },
        upload_image_success(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        upload_image_error(state, action) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        }

    }
})


export default uploadImageSlice.reducer;
export const {
    upload_image_loading,
    upload_image_success,
    upload_image_error

} = uploadImageSlice.actions;