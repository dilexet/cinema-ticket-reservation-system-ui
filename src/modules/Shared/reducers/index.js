import {combineReducers} from "@reduxjs/toolkit"
import {reducer as toastrReducer} from 'react-redux-toastr'
import loginSlice from "../../Login/store/reducers/LoginReducer";
import registerSlice from "../../Register/store/reducers/RegisterReducer";
import userManagementSlice from "../../UserManagement/store/reducers/UserManagementReducer";
import errorHandlerSlice from "../../ErrorHandler/store/reducers/ErrorHandlerReducer";
import movieManagementSlice from "../../MovieManagement/store/reducers/MovieManagementReducer";
import cinemaManagementSlice from "../../CinemaManagement/store/reducers/CinemaManagementReducer";
import hallManagementSlice from "../../HallManagement/store/reducers/HallManagementReducer";
import additionalServiceManagementSlice
    from "../../AdditionalServiceManagement/store/reducers/AdditionalServiceManagementReducer";
import uploadImageSlice from "../../UploadImage/store/reducers/UploadImageReducer";
import sessionManagementSlice from "../../SessionManagement/store/reducers/SessionManagementReducer";
import seatTypesSlice from "../../SeatType/store/reducers/SeatTypeReducer";
import movieFilterSlice from "../../MoviePage/store/reducers/MovieReducer";
import movieSessionSlice from "../../MovieSessionsPage/store/reducers/MovieSessionReducer";
import bookingSlice from "../../BookingPage/store/reducers/BookingReducer";
import confirmBookingSlice from "../../ConfirmBookingPage/store/reducers/ConfirmBookingReducer";
import userProfileSlice from "../../ProfilePage/store/reducers/ProfileReducer";

export const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    userManagement: userManagementSlice,
    errorHandler: errorHandlerSlice,
    movieManagement: movieManagementSlice,
    uploadImage: uploadImageSlice,
    cinemaManagement: cinemaManagementSlice,
    hallManagement: hallManagementSlice,
    additionalServiceManagement: additionalServiceManagementSlice,
    sessionManagement: sessionManagementSlice,
    seatTypes: seatTypesSlice,
    movieFilter: movieFilterSlice,
    movieSession: movieSessionSlice,
    booking: bookingSlice,
    confirmBooking: confirmBookingSlice,
    userProfile: userProfileSlice,
    toastr: toastrReducer
})