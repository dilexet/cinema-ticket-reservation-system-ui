import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import AdditionalServiceUpdateRow from "../component/AdditionalServiceUpdateRow";
import {updatingAdditionalServiceSchema} from "../constants/AdditionalServiceSchema";
import {clearErrors, updateAdditionalService} from "../store/action-creator/AdditionalServiceManagementActions";

const AdditionalServiceUpdateRowContainer = ({additionalService, index, setOpenEditId, theme}) => {
    const initialValues = {
        "Name": additionalService.name,
        "CinemaName": additionalService.cinemaName,
    }

    const [isUpdate, setIsUpdate] = React.useState(false)

    const dispatch = useDispatch();

    const serviceState = useSelector((state) => state.additionalServiceManagement);

    const handleCloseClick = async () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        await dispatch(clearErrors())
    }

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await updatingAdditionalServiceSchema.isValid(values)) {
            await dispatch(await updateAdditionalService(values, additionalService.id, additionalService.cinemaId))
            setIsUpdate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isUpdate === true && serviceState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isUpdate, serviceState.error]);


    return (
        <AdditionalServiceUpdateRow
            index={index} theme={theme} initialValues={initialValues}
            handleSubmitEditClick={handleSubmitEditClick}
            handleCloseClick={handleCloseClick} serviceState={serviceState}
        />
    )
}

export default AdditionalServiceUpdateRowContainer;