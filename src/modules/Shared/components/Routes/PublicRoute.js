import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';
import Loading from "../../../Loading/component/Loading";
import {isAuthorize} from '../../utils/TokenServices';

const PublicRoute = ({
                         component: Component, isAuthenticate,
                         setIsAuthenticate, isLoading, restricted, ...props
                     }) => {

    const errorHandlerState = useSelector((state) => state.errorHandler);

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

    if (isAuthenticate === null) {
        return <Loading isLoading={true}/>
    } else if (isAuthenticate === true && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;