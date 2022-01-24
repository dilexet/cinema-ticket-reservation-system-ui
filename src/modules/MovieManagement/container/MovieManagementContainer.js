import React, {useEffect, useState} from 'react'
import MoviesTable from '../component/MoviesTable'
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/action-creator/MovieManagementActions";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";

const MovieManagementContainer = () => {

    const dispatch = useDispatch();
    const moviesState = useSelector((state) => state.movieManagement);
    const uploadImageState = useSelector((state) => state.uploadImage);

    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getMoviesList() {
            await dispatch(await getMovies());
            setIsLoading(false)
        }

        if (isLoading === true) {
            getMoviesList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <MoviesTable moviesState={moviesState} theme={theme}
                         setOpenEditId={setOpenEditId} openDeleteId={openDeleteId}
                         setOpenDeleteId={setOpenDeleteId} handleAddClick={handleAddClick}
                         openEditId={openEditId} openAdd={openAdd} setOpenAdd={setOpenAdd}/>
        )
    }
}

export default MovieManagementContainer;