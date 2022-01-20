import UsersTable from "../component/UsersTable";
import {useActions} from "../hooks/UseActions";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Loading from "../../Loading/component/Loading";
import {useTheme} from "@mui/material";

const UserManagementContainer = () => {
    const {getUsers} = useActions();
    const usersState = useSelector((state) => state.userManagement);
    const [isLoading, setIsLoading] = useState(true);

    const theme = useTheme();
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getUsersList() {
            await getUsers();
            setIsLoading(false)
        }

        if (isLoading === true) {
            getUsersList()
        }
    }, [isLoading]);

    if (isLoading) {
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