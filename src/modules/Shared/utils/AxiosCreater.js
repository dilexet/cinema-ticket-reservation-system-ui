import axios from "axios";
import {BaseURL} from "../constants/BaseURLs";

const axiosInstance = axios.create({
    baseURL: BaseURL,
    timeout: 3000,
})

export default axiosInstance;