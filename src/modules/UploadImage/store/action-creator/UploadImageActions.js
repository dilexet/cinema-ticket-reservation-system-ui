import {
    upload_image_loading,
    upload_image_success,
    upload_image_error,
    upload_image_clear
} from "../reducers/UploadImageReducer"
import {uploadImageAPI} from "./UploadImageAPI";

export const uploadImageAsyncAction = (data) => {
    return async (dispatch) => {
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

export const clearUploadImage = () => {
    return async (dispatch) => {
        await dispatch(upload_image_clear())
    }
}