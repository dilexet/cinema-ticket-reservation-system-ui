import axios from "axios";
import {LoginURL} from "../../constants/LoginURL";

export const LoginAPI = (url = LoginURL) => {
    return {
        login: async (data) => await axios.post(url, data, {withCredentials: true})
    }
}