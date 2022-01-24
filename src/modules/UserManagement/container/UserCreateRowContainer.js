import React, {useEffect} from 'react';
import {useActions} from "../hooks/UseActions";
import UserCreateRow from "../component/UserCreateRow";
import {useSelector} from "react-redux";
import createUserSchema from "../constants/CreateUserSchema";

const UserCreateRowContainer = ({setOpenAdd, theme}) => {

    const [isCreate, setIsCreate] = React.useState(false)

    const {createUser, clearErrors} = useActions();

    const userManagementState = useSelector((state) => state.userManagement);

    const handleCloseClick = () => {
        setIsCreate(false)
        setOpenAdd(false)
        clearErrors()
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await createUserSchema.isValid(values)) {
            await createUser(values)
            setIsCreate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isCreate === true && userManagementState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isCreate, userManagementState.error]);


    return (
        <UserCreateRow
            theme={theme} userManagementState={userManagementState}
            handleSubmitCreateClick={handleSubmitCreateClick}
            handleCloseClick={handleCloseClick}
        />
    )
}

export default UserCreateRowContainer;