import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import HallsTable from "../component/HallsTable";
import {getHalls} from "../store/action-creator/HallManagementActions";

const HallManagementContainer = () => {
    const dispatch = useDispatch();
    const hallState = useSelector((state) => state.hallManagement);
    const [isLoading, setIsLoading] = useState(null);

    const theme = useTheme();
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getHallsList() {
            await dispatch(await getHalls());
            setIsLoading(false)
        }

        if (isLoading === null) {
            setIsLoading(true)
        }

        if (isLoading === true) {
            getHallsList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading === null || isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <HallsTable
                hallsState={hallState} theme={theme}
                setOpenEditId={setOpenEditId} openDeleteId={openDeleteId}
                setOpenDeleteId={setOpenDeleteId} handleAddClick={handleAddClick}
                openEditId={openEditId} openAdd={openAdd} setOpenAdd={setOpenAdd}
            />
        )
    }
}

export default HallManagementContainer;