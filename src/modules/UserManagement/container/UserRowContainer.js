import React from 'react';
import {useDispatch} from "react-redux";
import UserRow from "../component/UserRow";
import {deleteUser} from "../store/action-creator/UserManagementActions";

const UserRowContainer = ({
                              index, user, openEditId, setOpenEditId,
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
        await dispatch(await deleteUser(user.id))
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setOpenDeleteId(-1)
    }

    return (
        <UserRow
            index={index} user={user} theme={theme} isDisable={isDisable}
            openDeleteId={openDeleteId} handleSubmitDeleteClick={handleSubmitDeleteClick}
            handleCloseClick={handleCloseClick} handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
        />
    )
}

export default UserRowContainer;