import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import AdditionalServiceCreateRow from "../component/AdditionalServiceCreateRow";
import {creatingAdditionalServiceSchema} from "../constants/AdditionalServiceSchema";
import {
    clearErrors,
    createAdditionalService
} from "../store/action-creator/AdditionalServiceManagementActions";
import {getCinemas} from "../../CinemaManagement/store/action-creator/CinemaManagementActions";
import Loading from "../../Loading/component/Loading";
import {TableCell, TableRow} from "@mui/material";

const AdditionalServiceCreateRowContainer = ({setOpenAdd, theme}) => {
    const [isCreate, setIsCreate] = React.useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const serviceState = useSelector((state) => state.additionalServiceManagement);
    const cinemaState = useSelector((state) => state.cinemaManagement);


    const handleCloseClick = async () => {
        setIsCreate(false)
        setOpenAdd(false)
        await dispatch(clearErrors())
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await creatingAdditionalServiceSchema.isValid(values)) {
            await dispatch(await createAdditionalService(values, values.CinemaId))
            setIsCreate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isCreate === true && serviceState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isCreate, serviceState.error]);


    useEffect(() => {
        const getCinemasList = async () => {
            await dispatch(await getCinemas());
            setIsLoading(false)
        }

        if (isLoading === true) {
            getCinemasList()
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
            <AdditionalServiceCreateRow
                theme={theme} serviceState={serviceState}
                cinemaState={cinemaState}
                handleSubmitCreateClick={handleSubmitCreateClick}
                handleCloseClick={handleCloseClick}
            />
        )
    }
}

export default AdditionalServiceCreateRowContainer;