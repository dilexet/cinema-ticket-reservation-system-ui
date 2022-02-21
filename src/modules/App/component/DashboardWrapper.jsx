import React, {useEffect} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import {getRole} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";
import {AdminRole, ManagerRole} from "../../Shared/constants/RoleNames";

const DashboardWrapper = () => {
    const [role, setRole] = React.useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (role === null) {
            setRole(getRole())
        }
    }, [navigate, role])

    if (role === null) {
        return (
            <Loading isLoading={true}/>
        )
    } else if (role === AdminRole || role === ManagerRole) {
        return (
            <Navigate to='/dashboard'/>
        )
    } else {
        return (
            <Navigate to='/home'/>
        )
    }
}

export default DashboardWrapper;