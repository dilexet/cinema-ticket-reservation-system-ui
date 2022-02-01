import {combineReducers} from "@reduxjs/toolkit"
import loginSlice from "../../Login/store/reducers/LoginReducer";
import registerSlice from "../../Register/store/reducers/RegisterReducer";
import userManagementSlice from "../../UserManagement/store/reducers/UserManagementReducer";
import authenticateSlice from "../../Authenticate/store/reducers/AuthenticateReducer";
import movieManagementSlice from "../../MovieManagement/store/reducers/MovieManagementReducer";
import cinemaManagementSlice from "../../CinemaManagement/store/reducers/CinemaManagementReducer";
import hallManagementSlice from "../../HallManagement/store/reducers/HallManagementReducer";
import additionalServiceManagementSlice
    from "../../AdditionalServiceManagement/store/reducers/AdditionalServiceManagementReducer";
import uploadImageSlice from "../../UploadImage/store/reducers/UploadImageReducer";
import sessionManagementSlice from "../../SessionManagement/store/reducers/SessionManagementReducer";
import seatTypesSlice from "../../SeatType/store/reducers/SeatTypeReducer";

export const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    userManagement: userManagementSlice,
    authenticate: authenticateSlice,
    movieManagement: movieManagementSlice,
    uploadImage: uploadImageSlice,
    cinemaManagement: cinemaManagementSlice,
    hallManagement: hallManagementSlice,
    additionalServiceManagement: additionalServiceManagementSlice,
    sessionManagement: sessionManagementSlice,
    seatTypes: seatTypesSlice
})