import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';
import Loading from "../../Loading/component/Loading";

const PrivateRoute = ({
                          component: Component, isAuthenticate,
                          isLoading, setIsAuthenticate, ...props
                      }) => {
    useEffect(() => {
        let cleanupFunction = false;

        async function checkAuthorize() {
            if (isLoading === false && isAuthenticate === false) {
                console.log("Private route")
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
        return () => cleanupFunction = true;
    }, [isAuthenticate, isLoading, setIsAuthenticate]);

    if (isAuthenticate === null) {
        return <Loading/>
    } else if (isAuthenticate === true) {
        return <Component isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate} {...props}/>
    } else {
        return <Navigate to='/login'/>
    }
};

export default PrivateRoute;