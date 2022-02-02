import React from 'react';
import {useDispatch} from "react-redux";
import {deleteSession} from "../../store/actions-creator/SessionManagementActions";
import SessionRow from "../../component/Get/SessionRow";

const SessionRowContainer = ({
                                 index, session, openEditId, setOpenEditId,
                                 openDeleteId, setOpenDeleteId, theme, openAdd
                             }) => {

    const isEdit = openEditId !== -1 && openEditId !== index;
    const isDelete = openDeleteId !== -1 && openDeleteId !== index;

    const [openAdditionalRows, setOpenAdditionalRows] = React.useState(false);

    const isDisable = isEdit || isDelete || openAdd;

    const dispatch = useDispatch();

    const handleEditClick = () => {
        setOpenEditId(index)
    }

    const handleDeleteClick = () => {
        setOpenDeleteId(index)
    }

    const handleSubmitDeleteClick = async () => {
        await dispatch(await deleteSession(session.id))
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setOpenDeleteId(-1)
    }

    return (
        <SessionRow
            index={index} session={session} theme={theme} isDisable={isDisable}
            openDeleteId={openDeleteId} handleSubmitDeleteClick={handleSubmitDeleteClick}
            handleCloseClick={handleCloseClick} handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            openAdditionalRows={openAdditionalRows} setOpenAdditionalRows={setOpenAdditionalRows}
        />
    )
}

export default SessionRowContainer;
