import React from 'react';
import MovieRow from "../component/MovieRow";
import {useActions} from "../../UserManagement/hooks/UseActions";

const MovieRowContainer = ({
                               index, movie, openEditId, setOpenEditId,
                               openDeleteId, setOpenDeleteId, theme, openAdd
                           }) => {

    const isEdit = openEditId !== -1 && openEditId !== index;
    const isDelete = openDeleteId !== -1 && openDeleteId !== index;

    const isDisable = isEdit || isDelete || openAdd;

    const {deleteUser} = useActions();

    const handleEditClick = () => {
        setOpenEditId(index)
    }

    const handleDeleteClick = () => {
        setOpenDeleteId(index)
    }

    const handleSubmitDeleteClick = async () => {
        await deleteUser(movie.id)
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