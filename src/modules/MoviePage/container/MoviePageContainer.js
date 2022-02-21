import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import {getMoviesByFilter} from "../store/action-creator/MovieActions";
import MoviePage from "../component/MoviePage";
import {InitialMovieFilterParameterFieldValues} from "../constants/InitialFieldValues";

const MoviePageContainer = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const moviesState = useSelector((state) => state.movieManagement);

    const [filterParams, setFilterParams] = useState(InitialMovieFilterParameterFieldValues)

    useEffect(() => {
        async function getMoviesList() {
            await dispatch(await getMoviesByFilter(filterParams));
            setIsLoading(false)
        }

        if (isLoading === true || filterParams) {
            getMoviesList()
        }

    }, [dispatch, isLoading, filterParams]);

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <MoviePage theme={theme} moviesState={moviesState} filterParams={filterParams}
                       setFilterParams={setFilterParams}/>
        )
    }
}

export default MoviePageContainer;