import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MovieMenu from "../component/Menu/MovieMenu";
import {getListMovieTitles} from "../store/action-creator/MovieActions";

const MovieMenuContainer = ({open, filter, setFilter}) => {
    const dispatch = useDispatch();
    const movieFilterState = useSelector((state) => state.movieFilter);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = React.useState('');

    const handleChange = async (event) => {
        setSearch(event.target.value)
    }

    const handleMovieChoose = (title) => {
        setFilter({...filter, MovieName: title})
    }

    useEffect(() => {
        const getMoviesTitles = async () => {
            await dispatch(await getListMovieTitles(search))
        }
        getMoviesTitles()
    }, [dispatch, search])

    useEffect(() => {
        async function getMovieTitles() {
            await dispatch(await getListMovieTitles())
            setIsLoading(false)
        }

        if (isLoading === true) {
            getMovieTitles()
        }
    }, [dispatch, isLoading]);

    useEffect(() => {
        if (open === true) {
            setSearch('')
        }
    }, [open])

    return (
        <MovieMenu open={open} handleChange={handleChange}
                   movieFilterState={movieFilterState} filter={filter}
                   handleMovieChoose={handleMovieChoose}/>
    )
}

export default MovieMenuContainer;