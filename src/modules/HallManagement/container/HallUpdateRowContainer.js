import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import HallUpdateRow from "../component/HallUpdateRow";
import hallSchema from "../constants/HallSchema";
import {clearErrors, updateHall} from "../store/action-creator/HallManagementActions";
import {getSeatTypes} from "../../SeatType/store/action-creator/SeatTypeActions";
import {TableCell, TableRow} from "@mui/material";
import Loading from "../../Loading/component/Loading";

const HallUpdateRowContainer = ({hall, index, setOpenEditId, theme}) => {
    const [isUpdate, setIsUpdate] = React.useState(false)

    const [isLoading, setIsLoading] = useState(true);
    const [openRows, setOpenRows] = React.useState(false);

    const dispatch = useDispatch();

    const hallState = useSelector((state) => state.hallManagement);

    const handleCloseClick = async () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        await dispatch(clearErrors())
    }

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await hallSchema.isValid(values)) {
            await dispatch(await updateHall(values, hall.id, hall.cinemaId))
            setIsUpdate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isUpdate === true && hallState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isUpdate, hallState.error]);

    useEffect(() => {
        const getList = async () => {
            await dispatch(await getSeatTypes());
            setIsLoading(false)
        }

        if (isLoading === true) {
            getList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading) {
        return (
            <TableRow>
                <TableCell>
                    <Loading isLoading={true}/>
                </TableCell>
            </TableRow>
        )
    } else {
        return (
            <HallUpdateRow
                index={index} theme={theme} initialValues={hall}
                handleSubmitEditClick={handleSubmitEditClick}
                handleCloseClick={handleCloseClick} hallState={hallState}
                openRows={openRows} setOpenRows={setOpenRows}
            />
        )
    }
}

export default HallUpdateRowContainer;