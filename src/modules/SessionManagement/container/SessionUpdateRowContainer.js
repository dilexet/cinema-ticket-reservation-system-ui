import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import sessionSchema from "../constants/SessionSchema";
import {updateSession, clearErrors} from "../store/actions-creator/SessionManagementActions";
import SessionUpdateRow from "../component/SessionUpdateRow";
import {InitialSessionFieldValues} from "../constants/InitialFieldValues";
import moment from "moment";
import {TableCell, TableRow} from "@mui/material";
import Loading from "../../Loading/component/Loading";

const SessionUpdateRowContainer = ({session, index, setOpenEditId, theme}) => {
    const [isUpdate, setIsUpdate] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true);
    const [openRows, setOpenRows] = React.useState(false);

    const dispatch = useDispatch();

    const sessionState = useSelector((state) => state.sessionManagement);
    const [initialState, setInitialState] = React.useState(InitialSessionFieldValues)

    const handleCloseClick = useCallback(async () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        await dispatch(clearErrors())
    }, [dispatch, setOpenEditId])

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await sessionSchema.isValid(values)) {
            await dispatch(await updateSession(values, session.id))
            setIsUpdate(true)
        }
    }

    useEffect(() => {
        if (isUpdate === true && sessionState.error === null) {
            handleCloseClick()
        }
    }, [handleCloseClick, isUpdate, sessionState.error]);

    useEffect(() => {
        if (isLoading === true) {
            const sessionAdditionalServices = []
            session?.sessionAdditionalServices?.forEach(value => {
                sessionAdditionalServices?.push({
                    name: value?.additionalService?.name,
                    price: value?.price,
                })
            })

            const sessionSeatTypes = []
            session?.sessionSeatTypes?.forEach(value => {
                sessionSeatTypes?.push({
                    seatType: value?.seatType,
                    price: value?.price,
                })
            })

            setInitialState({
                cinemaId: session?.hall?.cinemaId,
                hallId: session?.hall?.id,
                movieId: session?.movie?.id,
                cinemaName: session.hall.cinemaName,
                hallName: session.hall.name,
                movieName: session.movie.name,
                startDate: moment(new Date(session.startDate)).format('YYYY-MM-DDTHH:mm:ss'),
                sessionAdditionalServices: sessionAdditionalServices,
                sessionSeatTypes: sessionSeatTypes
            })
            setIsLoading(false)
        }
    }, [isLoading, session.hall?.cinemaId, session.hall.cinemaName, session.hall?.id, session.hall.name, session.movie?.id, session.movie.name, session?.sessionAdditionalServices, session?.sessionSeatTypes, session.startDate])

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
            <SessionUpdateRow
                index={index} theme={theme} initialValues={initialState}
                handleSubmitEditClick={handleSubmitEditClick}
                handleCloseClick={handleCloseClick} sessionState={sessionState}
                openRows={openRows} setOpenRows={setOpenRows}
            />
        )
    }
}

export default SessionUpdateRowContainer;