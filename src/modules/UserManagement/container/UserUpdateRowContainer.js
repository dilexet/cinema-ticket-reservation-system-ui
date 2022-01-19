import React from 'react';
import {useActions} from "../hooks/UseActions";
import UserUpdateRow from "../component/UserUpdateRow";

const UserUpdateRowContainer = ({user, index, setOpenEditId, theme}) => {
    const {updateUser} = useActions();

    const [values, setValues] = React.useState({
        "Id": user.id,
        "Name": user.name,
        "Email": user.email,
        "RoleName": user.roleName
    });

    const handleSubmitEditClick = async () => {
        await updateUser(values, user.id)
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setValues({
            "Id": user.id,
            "Name": user.name,
            "Email": user.email,
            "RoleName": user.roleName
        })
        setOpenEditId(-1)
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        const fieldValue = {[name]: value}
        setValues({
            ...values, ...fieldValue
        })
    }

    return (
        <UserUpdateRow
            index={index} theme={theme} values={values}
            handleInputChange={handleInputChange}
            handleSubmitEditClick={handleSubmitEditClick}
            handleCloseClick={handleCloseClick}
        />
    )
}

export default UserUpdateRowContainer;