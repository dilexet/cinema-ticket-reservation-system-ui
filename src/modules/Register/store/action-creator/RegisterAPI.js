import axios from "axios";
import {RegisterURL} from "../../constants/RegisterURL";

export const RegisterAPI = (url = RegisterURL) => {
    return {
        register: async (data) => await axios.post(url, data, {withCredentials: true})
    }
}