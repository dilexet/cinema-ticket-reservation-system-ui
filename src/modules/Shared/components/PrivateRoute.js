import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';
import Loading from "../../Loading/component/Loading";
import {useAuthenticate} from "../utils/AuthenticateContext";

const PrivateRoute = ({
                          component: Component,
                          isLoading, ...props
                      }) => {

    const {isAuthenticate, changeAuthenticate} = useAuthenticate();

    useEffect(() => {
        async function checkAuthorize() {
            if (isLoading === false && isAuthenticate === false) {
                const result = await isAuthorize();
                changeAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [isAuthenticate, isLoading]);

    if (isAuthenticate === null) {
        return <Loading/>
    } else if (isAuthenticate === true) {
        return <Component {...props}/>
    } else {
        return <Navigate to='/login'/>
    }
};

export default PrivateRoute;