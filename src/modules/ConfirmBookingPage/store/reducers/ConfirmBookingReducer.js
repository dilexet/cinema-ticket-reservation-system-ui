import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    bookTicketState: {
        code: null,
        success: false,
        bookOrder: null,
    },
    loading: false,
    error: null,
}

const confirmBookingSlice = createSlice({
    name: "confirm-booking",
    initialState: initialState,
    reducers: {
        book_tickets_loading(state) {
            state.loading = false;
            state.bookTicketState = null;
            state.error = null;
        },
        book_tickets_success(state, action) {
            state.loading = false;
            state.bookTicketState = {
                code: action.payload.code,
                success: action.payload.success,
                bookOrder: action.payload.bookOrder,
            }
            state.error = null;
        },
        book_tickets_error(state, action) {
            state.loading = false;
            state.bookTicketState = {
                code: null,
                success: false,
                bookOrder: null,
            };
            state.error = action.payload;
        },
    }
})


export default confirmBookingSlice.reducer;
export const {
    book_tickets_loading,
    book_tickets_success,
    book_tickets_error,
} = confirmBookingSlice.actions;