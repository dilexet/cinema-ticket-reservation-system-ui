import {upload_image_loading, upload_image_success, upload_image_error} from "../reducers/UploadImageReducer"
import {uploadImageAPI} from "./UploadImageAPI";

export const uploadImageAsyncAction = (data) => {
    return async (dispatch) => {
        console.log("CALL")
        dispatch(upload_image_loading())

        try {
            const response = await uploadImageAPI().upload_image(data)
            dispatch(upload_image_success(response.data))
        } catch (error) {
            if (error.response) {
                dispatch(upload_image_error(error.response.data))
            }
        }
    }
}