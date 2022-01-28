import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import UserUpdateRow from "../component/UserUpdateRow";
import updateUserSchema from "../constants/UpdateUserSchema";
import {clearErrors, updateUser} from "../store/action-creator/UserManagementActions";

const UserUpdateRowContainer = ({user, index, setOpenEditId, theme}) => {
    const initialValues = {
        "Name": user.name,
        "Email": user.email,
        "RoleName": user.roleName
    }

    const [isUpdate, setIsUpdate] = React.useState(false)

    const dispatch = useDispatch();

    const userManagementState = useSelector((state) => state.userManagement);

    const handleCloseClick = async () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        await dispatch(clearErrors())
    }

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await updateUserSchema.isValid(values)) {
            await dispatch(await updateUser(values, user.id))
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