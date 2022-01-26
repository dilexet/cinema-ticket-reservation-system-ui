import React from 'react';
import {useDispatch} from "react-redux";
import CinemaRow from "../component/CinemaRow";
import {deleteCinema} from "../store/action-creator/CinemaManagementActions";

const CinemaRowContainer = ({
                                index, cinema, openEditId, setOpenEditId,
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
        await dispatch(await deleteCinema(cinema.id))
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setOpenDeleteId(-1)
    }

    return (
        <CinemaRow
            index={index} cinema={cinema} theme={theme} isDisable={isDisable}
            openDeleteId={openDeleteId} handleSubmitDeleteClick={handleSubmitDeleteClick}
            handleCloseClick={handleCloseClick} handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
        />
    )
}

export default CinemaRowContainer;
