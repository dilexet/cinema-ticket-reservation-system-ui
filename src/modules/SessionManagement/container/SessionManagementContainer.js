import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import SessionsTable from "../component/SessionsTable";
import {getSessions} from "../store/actions-creator/SessionManagementActions";

const SessionManagementContainer = () => {
    const dispatch = useDispatch();
    const sessionState = useSelector((state) => state.sessionManagement);
    const [isLoading, setIsLoading] = useState(null);

    const theme = useTheme();
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getSessionsList() {
            await dispatch(await getSessions());
            setIsLoading(false)
        }

        if (isLoading === null) {
            setIsLoading(true)
        }

        if (isLoading === true) {
            getSessionsList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading === null || isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <SessionsTable
                sessionState={sessionState} theme={theme}
                setOpenEditId={setOpenEditId} openDeleteId={openDeleteId}
                setOpenDeleteId={setOpenDeleteId} handleAddClick={handleAddClick}
                openEditId={openEditId} openAdd={openAdd} setOpenAdd={setOpenAdd}
            />
        )
    }
}

export default SessionManagementContainer;