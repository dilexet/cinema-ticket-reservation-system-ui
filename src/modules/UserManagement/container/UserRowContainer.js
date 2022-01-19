import React from 'react';
import UserRow from "../component/UserRow";
import {useActions} from "../hooks/UseActions";

const UserRowContainer = ({
                              index, user, openEditId, setOpenEditId,
                              openDeleteId, setOpenDeleteId, theme
                          }) => {
    const isEdit = (openEditId !== -1 && openEditId !== index);
    const isDelete = openDeleteId !== -1 && openDeleteId !== index;

    const isDisable = isEdit || isDelete;

    const {deleteUser} = useActions();

    const handleEditClick = () => {
        setOpenEditId(index)
    }

    const handleDeleteClick = () => {
        setOpenDeleteId(index)
    }

    const handleSubmitDeleteClick = async () => {
        await deleteUser(user.id)
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