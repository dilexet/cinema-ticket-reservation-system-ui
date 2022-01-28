import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: {
        code: null,
        success: false,
        seatTypes: []
    },
    loading: false,
    error: null,
}

const seatTypesSlice = createSlice({
    name: "seat-type",
    initialState: initialState,
    reducers: {
        get_seatTypes_loading(state) {
            state.loading = false;
            state.data = null;
            state.error = null;
        },
        get_seatTypes_success(state, action) {
            state.loading = false;
            state.data = {
                code: action.payload.code,
                success: action.payload.success,
                seatTypes: action.payload.seatTypes
            };
            state.error = null;
        },
        get_seatTypes_error(state, action) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
    }
})


export default seatTypesSlice.reducer;
export const {
    get_seatTypes_loading,
    get_seatTypes_success,
    get_seatTypes_error
} = seatTypesSlice.actions;