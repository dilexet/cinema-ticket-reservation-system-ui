import axiosInstance from "../../../Shared/utils/AxiosCreater";
import {MovieFilterURL} from "../../../Shared/constants/BaseURLs";
import {InitialMovieFilterParameterFieldValues} from "../../constants/InitialFieldValues";
import {GetListOfMovieTitlesURL, GetListOfCinemaNames, GetListOfCityNames} from "../../constants/URL";

export const movieAPI = (url = MovieFilterURL) => {
    return {
        get_movies_by_filter: async (params = InitialMovieFilterParameterFieldValues) => await axiosInstance.get(url, {params}),
        get_sessions_for_movie: async (id) => await axiosInstance.get(url + id),
        get_list_movie_titles: async (params) => await axiosInstance.get(GetListOfMovieTitlesURL, {params}),
        get_list_cinema_names: async (params) => await axiosInstance.get(GetListOfCinemaNames, {params}),
        get_list_city_names: async (params) => await axiosInstance.get(GetListOfCityNames, {params}),
    }
}