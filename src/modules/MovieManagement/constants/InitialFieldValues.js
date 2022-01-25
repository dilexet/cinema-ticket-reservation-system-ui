import moment from "moment";

export const InitialMovieFieldValues = {
    Name: "",
    PosterUrl: "",
    StartDate: moment(Date.now()).format('yyyy-MM-DD'),
    EndDate: moment(Date.now()).format('yyyy-MM-DD'),
    ReleaseDate: moment(Date.now()).format('yyyy-MM-DD'),
    Description: "",
    Countries: "",
    Genres: "",
}