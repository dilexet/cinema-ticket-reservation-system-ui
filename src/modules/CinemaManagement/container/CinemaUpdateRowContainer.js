import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import CinemaUpdateRow from "../component/CinemaUpdateRow";
import cinemaSchema from "../constants/CinemaSchema";
import {clearErrors, updateCinema} from "../store/action-creator/CinemaManagementActions";

const CinemaUpdateRowContainer = ({cinema, index, setOpenEditId, theme}) => {
    const initialValues = {
        "Name": cinema.name,
        "CityName": cinema.cityName,
        "Street": cinema.street,
    }

    const [isUpdate, setIsUpdate] = React.useState(false)

    const dispatch = useDispatch();

    const cinemaManagementState = useSelector((state) => state.cinemaManagement);

    const handleCloseClick = useCallback(async () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        await dispatch(clearErrors())
    }, [dispatch, setOpenEditId])

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await cinemaSchema.isValid(values)) {
            await dispatch(await updateCinema(values, cinema.id))
            setIsUpdate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isUpdate === true && cinemaManagementState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isUpdate, cinemaManagementState.error, handleCloseClick]);

    return (
        <CinemaUpdateRow
            index={index} theme={theme} initialValues={initialValues}
            handleSubmitEditClick={handleSubmitEditClick}
            handleCloseClick={handleCloseClick} cinemaManagementState={cinemaManagementState}
        />
    )
}

export default CinemaUpdateRowContainer;