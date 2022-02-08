import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    sessionState: {
        code: null,
        success: false,
        session: null,
    },
    bookTicketState: {
        code: null,
        success: false,
        bookOrder: null,
    },
    loading: false,
    error: null,
}

const bookingSlice = createSlice({
    name: "booking",
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
        get_session_by_id_loading(state) {
            state.loading = false;
            state.sessionState = null;
            state.error = null;
        },
        get_session_by_id_success(state, action) {
            state.loading = false;
            state.sessionState = {
                code: action.payload.code,
                success: action.payload.success,
                session: action.payload.session,
            };
            state.error = null;
        },
        get_session_by_id_error(state, action) {
            state.loading = false;
            state.sessionState = {
                code: null,
                success: false,
                session: [],
            };
            state.error = action.payload;
        },
    }
})


export default bookingSlice.reducer;
export const {
    get_session_by_id_loading,
    get_session_by_id_success,
    get_session_by_id_error,
    book_tickets_loading,
    book_tickets_success,
    book_tickets_error,
} = bookingSlice.actions;