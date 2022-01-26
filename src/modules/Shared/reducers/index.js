import {combineReducers} from "@reduxjs/toolkit"
import loginSlice from "../../Login/store/reducers/LoginReducer";
import registerSlice from "../../Register/store/reducers/RegisterReducer";
import userManagementSlice from "../../UserManagement/store/reducers/UserManagementReducer";
import authenticateSlice from "../../Authenticate/store/reducers/AuthenticateReducer";
import movieManagementSlice from "../../MovieManagement/store/reducers/MovieManagementReducer";
import uploadImageSlice from "../../UploadImage/store/reducers/UploadImageReducer";

export const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    userManagement: userManagementSlice,
    authenticate: authenticateSlice,
    movieManagement: movieManagementSlice,
    uploadImage: uploadImageSlice,
    cinemaManagement: cinemaManagementSlice,
    additionalServiceManagement: additionalServiceManagementSlice,
})