import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import AdditionalServicesTable from "../component/AdditionalServicesTable";
import {getAdditionalServices} from "../store/action-creator/AdditionalServiceManagementActions";

const AdditionalServiceManagementContainer = () => {

    const dispatch = useDispatch();
    const serviceState = useSelector((state) => state.additionalServiceManagement);
    const [isLoading, setIsLoading] = useState(true);

    const theme = useTheme();
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getAdditionalServicesList() {
            await dispatch(await getAdditionalServices());
            setIsLoading(false)
        }

        if (isLoading === true) {
            getAdditionalServicesList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <AdditionalServicesTable
                additionalServicesState={serviceState} theme={theme}
                setOpenEditId={setOpenEditId} openDeleteId={openDeleteId}
                setOpenDeleteId={setOpenDeleteId} handleAddClick={handleAddClick}
                openEditId={openEditId} openAdd={openAdd} setOpenAdd={setOpenAdd}
            />
        )
    }
}

export default AdditionalServiceManagementContainer;