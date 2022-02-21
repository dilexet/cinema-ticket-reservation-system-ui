import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {TableCell, TableRow} from "@mui/material";
import {getCinemas} from "../../CinemaManagement/store/action-creator/CinemaManagementActions";
import {getMoviesWithParams} from "../../MovieManagement/store/action-creator/MovieManagementActions";
import Loading from "../../Loading/component/Loading";
import sessionSchema from "../constants/SessionSchema";
import {clearErrors, createSession} from "../store/actions-creator/SessionManagementActions";
import {clearData, getHallsByCinemaId} from "../../HallManagement/store/action-creator/HallManagementActions";
import SessionCreateRow from "../component/SessionCreateRow";
import {
    getAdditionalServicesByCinemaId, clearData as clearAddServices
} from "../../AdditionalServiceManagement/store/action-creator/AdditionalServiceManagementActions";

const HallCreateRowContainer = ({setOpenAdd, theme}) => {
    const [isCreate, setIsCreate] = React.useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [openRows, setOpenRows] = React.useState(false);

    const dispatch = useDispatch();

    const hallState = useSelector((state) => state.hallManagement);
    const movieState = useSelector((state) => state.movieManagement);
    const cinemaState = useSelector((state) => state.cinemaManagement);
    const sessionState = useSelector((state) => state.sessionManagement);


    const handleCloseClick = useCallback(async () => {
        setIsCreate(false)
        setOpenAdd(false)
        await dispatch(clearErrors())
    }, [dispatch, setOpenAdd])

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await sessionSchema.isValid(values)) {
            await dispatch(await createSession(values))
            setIsCreate(true)
        }
    }

    const clearDataList = useCallback(async () => {
        await dispatch(await clearData())
        await dispatch(await clearAddServices())
    }, [dispatch])
    
    useEffect(() => {
        const close = () => {
            if (isCreate === true && sessionState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [handleCloseClick, isCreate, sessionState.error]);


    useEffect(() => {
        const getList = async () => {
            await dispatch(await getCinemas());
            await dispatch(await getMoviesWithParams(true, null, null));
            await clearDataList()
            setIsLoading(false)
        }

        if (isLoading === true) {
            getList()
        }
    }, [clearDataList, dispatch, isLoading, setIsLoading]);

    const getHalls = async (cinemaId) => {
        await dispatch(await getHallsByCinemaId(cinemaId));
    }

    const getAdditionalServices = async (cinemaId) => {
        await dispatch(await getAdditionalServicesByCinemaId(cinemaId));
    }

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
            <SessionCreateRow
                theme={theme} handleSubmitCreateClick={handleSubmitCreateClick}
                hallState={hallState} cinemaState={cinemaState} movieState={movieState} sessionState={sessionState}
                handleCloseClick={handleCloseClick} getHalls={getHalls} getAdditionalServices={getAdditionalServices}
                openRows={openRows} setOpenRows={setOpenRows} clearDataList={clearDataList}
            />
        )
    }
}

export default HallCreateRowContainer;