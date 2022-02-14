import React, {useEffect} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import {getRole} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";
import {UserRole} from "../../Shared/constants/RoleNames";

const DashboardWrapper = () => {
    const [isUser, setIsUser] = React.useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isUser === null) {
            const role = getRole();
            setIsUser(role === UserRole);
        }
    }, [isUser, navigate])

    if (isUser === null) {
        return (
            <Loading isLoading={true}/>
        )
    } else if (isUser === true) {
        return (
            <Navigate to='/home'/>
        )
    } else {
        return (
            <Navigate to='/dashboard'/>
        )
    }
}

export default DashboardWrapper;