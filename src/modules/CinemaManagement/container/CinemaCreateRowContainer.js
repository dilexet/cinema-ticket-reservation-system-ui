import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import CinemaCreateRow from "../component/CinemaCreateRow";
import cinemaSchema from "../constants/CinemaSchema";
import {clearErrors, createCinema} from "../store/action-creator/CinemaManagementActions";

const CinemaCreateRowContainer = ({setOpenAdd, theme}) => {

    const [isCreate, setIsCreate] = React.useState(false)
    const dispatch = useDispatch();
    const cinemaManagementState = useSelector((state) => state.cinemaManagement);

    const handleCloseClick = async () => {
        setIsCreate(false)
        setOpenAdd(false)
        await dispatch(clearErrors())
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await cinemaSchema.isValid(values)) {
            await dispatch(await createCinema(values))
            setIsCreate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isCreate === true && cinemaManagementState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isCreate, cinemaManagementState.error]);

    return (
        <CinemaCreateRow
            theme={theme} cinemaManagementState={cinemaManagementState}
            handleSubmitCreateClick={handleSubmitCreateClick}
            handleCloseClick={handleCloseClick}
        />
    )
}

export default CinemaCreateRowContainer;