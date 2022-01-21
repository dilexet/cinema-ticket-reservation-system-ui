import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {ImageUploadURL} from "../../../Shared/constants/BaseURLs";

export const uploadImageAPI = (url = ImageUploadURL) => {
    return {
        upload_image: async (data) => await axiosInstance.post(url, data)
    }
}