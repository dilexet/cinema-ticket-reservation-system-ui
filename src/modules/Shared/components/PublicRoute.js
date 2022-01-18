import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';
import Loading from "../../Loading/component/Loading";

const PublicRoute = ({
                         component: Component, isAuthenticate,
                         setIsAuthenticate, isLoading, restricted, ...props
                     }) => {
    useEffect(() => {

        async function checkAuthorize() {
            if (isLoading === false && isAuthenticate === false) {
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [isAuthenticate, isLoading, setIsAuthenticate]);

    if (isAuthenticate === null) {
        return <Loading/>
    } else if (isAuthenticate === true && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;