import React from 'react';
import {useDispatch} from "react-redux";
import HallRow from "../../component/Get/HallRow";
import {deleteHall} from "../../store/action-creator/HallManagementActions";

const HallRowContainer = ({
                              index, hall, openEditId, setOpenEditId,
                              openDeleteId, setOpenDeleteId, theme, openAdd
                          }) => {

    const isEdit = openEditId !== -1 && openEditId !== index;
    const isDelete = openDeleteId !== -1 && openDeleteId !== index;

    const [openRows, setOpenRows] = React.useState(false);

    const isDisable = isEdit || isDelete || openAdd;

    const dispatch = useDispatch();

    const handleEditClick = () => {
        setOpenEditId(index)
    }

    const handleDeleteClick = () => {
        setOpenDeleteId(index)
    }

    const handleSubmitDeleteClick = async () => {
        await dispatch(await deleteHall(hall.id))
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setOpenDeleteId(-1)
    }

    return (
        <HallRow
            index={index} hall={hall} theme={theme} isDisable={isDisable}
            openDeleteId={openDeleteId} handleSubmitDeleteClick={handleSubmitDeleteClick}
            handleCloseClick={handleCloseClick} handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            openRows={openRows} setOpenRows={setOpenRows}
        />
    )
}

export default HallRowContainer;
