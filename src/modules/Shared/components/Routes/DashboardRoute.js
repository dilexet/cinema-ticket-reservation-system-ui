import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';
import Loading from "../../../Loading/component/Loading";
import {isAuthorize, getRole} from '../../utils/TokenServices';

const DashboardRoute = ({
                       component: Component, isAuthenticate,
                       isLoading, setIsAuthenticate, role, ...props
                   }) => {
    const errorHandlerState = useSelector((state) => state.errorHandler);
    const [haveAccess, setHaveAccess] = React.useState(null);

    useEffect(() => {
        async function checkAuthorize() {
            if (errorHandlerState.isAuthenticate === false) {
                setIsAuthenticate(false)
            } else if (isLoading === false && isAuthenticate === false) {
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [errorHandlerState.isAuthenticate, isAuthenticate, isLoading, setIsAuthenticate]);


    useEffect(() => {
        if (haveAccess == null) {
            setHaveAccess(getRole() !== role);
        }
    }, [haveAccess, role])

    if (isAuthenticate === null || haveAccess === null) {
        return <Loading isLoading={true}/>
    } else if (isAuthenticate === false) {
        return (<Navigate to='/login'/>)
    } else if (haveAccess === false) {
        return (<Navigate to='/home'/>)
    } else if (isAuthenticate === true && haveAccess === true) {
        return <Component isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate} {...props}/>
    }
};

export default DashboardRoute;