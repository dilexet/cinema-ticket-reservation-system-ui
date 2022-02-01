import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {TableCell, TableRow} from "@mui/material";
import HallCreateRow from "../component/HallCreateRow";
import hallSchema from "../constants/HallSchema";
import {getSeatTypes} from "../../SeatType/store/action-creator/SeatTypeActions";
import {getCinemas} from "../../CinemaManagement/store/action-creator/CinemaManagementActions";
import Loading from "../../Loading/component/Loading";
import {createHall, clearErrors} from "../store/action-creator/HallManagementActions";

const HallCreateRowContainer = ({setOpenAdd, theme}) => {
    const [isCreate, setIsCreate] = React.useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [openRows, setOpenRows] = React.useState(false);

    const dispatch = useDispatch();

    const hallState = useSelector((state) => state.hallManagement);
    const cinemaState = useSelector((state) => state.cinemaManagement);

    const handleCloseClick = async () => {
        setIsCreate(false)
        setOpenAdd(false)
        await dispatch(clearErrors())
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await hallSchema.isValid(values)) {
            await dispatch(await createHall(values, values.cinemaId))
            setIsCreate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isCreate === true && hallState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isCreate, hallState.error]);


    useEffect(() => {
        const getList = async () => {
            await dispatch(await getCinemas());
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
            <HallCreateRow
                theme={theme} handleSubmitCreateClick={handleSubmitCreateClick}
                hallManagementState={hallState} cinemaState={cinemaState}
                handleCloseClick={handleCloseClick}
                openRows={openRows} setOpenRows={setOpenRows}
            />
        )
    }
}

export default HallCreateRowContainer;