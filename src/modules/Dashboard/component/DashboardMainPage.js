import React, {useEffect} from 'react'
import {Navigate} from "react-router-dom";
import {getRole} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";
import {UserRole, ManagerRole, AdminRole} from "../../Shared/constants/RoleNames";

const DashboardMainPage = () => {

    const [role, setRole] = React.useState(null);

    useEffect(() => {
        if (role == null) {
            const userRole = getRole();
            if (userRole === null) {
                setRole(undefined)
            } else {
                setRole(userRole);
            }
        }
    }, [role])

    if (role === null) {
        return <Loading isLoading={true}/>
    } else if (role === undefined) {
        return (<Navigate to='/login'/>)
    } else if (role === UserRole) {
        return (<Navigate to='/home'/>)
    } else if (role === ManagerRole) {
        return (<Navigate to='/dashboard/movie-management'/>)
    } else if (role === AdminRole) {
        return (<Navigate to='/dashboard/user-management'/>)
    }
}

export default DashboardMainPage;