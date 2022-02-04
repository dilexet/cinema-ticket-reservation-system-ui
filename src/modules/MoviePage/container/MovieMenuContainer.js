import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../Loading/component/Loading";
import MovieMenu from "../component/Menu/MovieMenu";
import {getListMovieTitles} from "../store/action-creator/MovieActions";

const MovieMenuContainer = ({open, filter, setFilter}) => {
    const dispatch = useDispatch();
    const movieFilterState = useSelector((state) => state.movieFilter);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = async (event) => {
        await dispatch(await getListMovieTitles(event.target.value))
    }

    const handleMovieChoose = (title) => {
        setFilter({...filter, MovieName: title})
    }

    useEffect(() => {
        async function getMovieTitles() {
            await dispatch(await getListMovieTitles())
            setIsLoading(false)
        }

        if (isLoading === true) {
            getMovieTitles()
        }
    }, [dispatch, isLoading]);

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <MovieMenu open={open} handleChange={handleChange}
                       movieFilterState={movieFilterState} filter={filter}
                       handleMovieChoose={handleMovieChoose}/>
        )
    }
}

export default MovieMenuContainer;