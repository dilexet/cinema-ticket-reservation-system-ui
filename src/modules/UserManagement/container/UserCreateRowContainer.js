import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import UserCreateRow from "../component/UserCreateRow";
import createUserSchema from "../constants/CreateUserSchema";
import {clearErrors, createUser} from "../store/action-creator/UserManagementActions";

const UserCreateRowContainer = ({setOpenAdd, theme}) => {

    const [isCreate, setIsCreate] = React.useState(false)

    const dispatch = useDispatch();

    const userManagementState = useSelector((state) => state.userManagement);

    const handleCloseClick = async () => {
        setIsCreate(false)
        setOpenAdd(false)
        await dispatch(clearErrors())
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await createUserSchema.isValid(values)) {
            await dispatch(await createUser(values))
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