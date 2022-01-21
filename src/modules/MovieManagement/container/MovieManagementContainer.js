import React, {useEffect, useState} from 'react'
import MoviesTable from '../component/MoviesTable'
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/action-creator/MovieManagementActions";

const MovieManagementContainer = () => {
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.userManagement);
    const uploadImageState = useSelector((state) => state.uploadImage);

    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     async function getMoviesList() {
    //         await dispatch(await getMovies());
    //         setIsLoading(false)
    //     }
    //
    //     if (isLoading === true) {
    //         getMoviesList()
    //     }
    // }, [dispatch, isLoading, setIsLoading]);

    return (
        <MoviesTable uploadImageState={uploadImageState}/>
    )
}

export default MovieManagementContainer;