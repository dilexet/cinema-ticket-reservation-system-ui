import React, {useEffect} from 'react';
import {useActions} from "../hooks/UseActions";
import UserUpdateRow from "../component/UserUpdateRow";
import updateUserSchema from "../constants/UpdateUserSchema";
import {useSelector} from "react-redux";

const UserUpdateRowContainer = ({user, index, setOpenEditId, theme}) => {
    const initialValues = {
        "Id": user.id,
        "Name": user.name,
        "Email": user.email,
        "RoleName": user.roleName
    }

    const [isUpdate, setIsUpdate] = React.useState(false)

    const {updateUser, clearErrors} = useActions();

    const userManagementState = useSelector((state) => state.userManagement);

    const handleCloseClick = () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        clearErrors()
    }

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await updateUserSchema.isValid(values)) {
            await updateUser(values, user.id)
            setIsUpdate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isUpdate === true && userManagementState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [isUpdate, userManagementState.error]);


    return (
        <UserUpdateRow
            index={index} theme={theme} initialValues={initialValues}
            handleSubmitEditClick={handleSubmitEditClick}
            handleCloseClick={handleCloseClick} userManagementState={userManagementState}
        />
    )
}

export default UserUpdateRowContainer;