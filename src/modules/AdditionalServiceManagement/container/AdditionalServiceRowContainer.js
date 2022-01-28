import React from 'react';
import {useDispatch} from "react-redux";
import AdditionalServiceRow from "../component/AdditionalServiceRow";
import {deleteAdditionalService} from "../store/action-creator/AdditionalServiceManagementActions";

const AdditionalServiceRowContainer = ({
                                           index, additionalService, openEditId, setOpenEditId,
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
        await dispatch(await deleteAdditionalService(additionalService.id))
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setOpenDeleteId(-1)
    }

    return (
        <AdditionalServiceRow
            index={index} additionalService={additionalService} theme={theme} isDisable={isDisable}
            openDeleteId={openDeleteId} handleSubmitDeleteClick={handleSubmitDeleteClick}
            handleCloseClick={handleCloseClick} handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
        />
    )
}

export default AdditionalServiceRowContainer;
