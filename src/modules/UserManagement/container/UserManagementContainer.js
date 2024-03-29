import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import UsersTable from "../component/UsersTable";
import {getRoles, getUsers} from "../store/action-creator/UserManagementActions";


const UserManagementContainer = () => {
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.userManagement);
    const [isLoading, setIsLoading] = useState(null);

    const theme = useTheme();
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getUsersList() {
            await dispatch(await getUsers());
            await dispatch(await getRoles());
            setIsLoading(false)
        }

        if (isLoading === null) {
            setIsLoading(true)
        }

        if (isLoading === true) {
            getUsersList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading === null || isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <UsersTable usersState={usersState} theme={theme}
                        setOpenEditId={setOpenEditId} openDeleteId={openDeleteId}
                        setOpenDeleteId={setOpenDeleteId} handleAddClick={handleAddClick}
                        openEditId={openEditId} openAdd={openAdd} setOpenAdd={setOpenAdd}
            />
        )
    }

}

export default UserManagementContainer;