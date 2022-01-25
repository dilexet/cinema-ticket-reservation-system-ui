import React from 'react';
import {useDispatch} from "react-redux";
import MovieRow from "../component/MovieRow";
import {deleteMovie} from "../store/action-creator/MovieManagementActions";

const MovieRowContainer = ({
                               index, movie, openEditId, setOpenEditId,
                               openDeleteId, setOpenDeleteId, theme, openAdd
                           }) => {

    const isEdit = openEditId !== -1 && openEditId !== index;
    const isDelete = openDeleteId !== -1 && openDeleteId !== index;

    const isDisable = isEdit || isDelete || openAdd;

    const dispatch = useDispatch();

    const handleEditClick = () => {
        setOpenEditId(index)
    }

    const handleDeleteClick = () => {
        setOpenDeleteId(index)
    }

    const handleSubmitDeleteClick = async () => {
        await dispatch(await deleteMovie(movie.id))
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setOpenDeleteId(-1)
    }

    return (
        <MovieRow
            index={index} movie={movie} theme={theme} isDisable={isDisable}
            openDeleteId={openDeleteId} handleSubmitDeleteClick={handleSubmitDeleteClick}
            handleCloseClick={handleCloseClick} handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
        />
    )
}

export default MovieRowContainer;