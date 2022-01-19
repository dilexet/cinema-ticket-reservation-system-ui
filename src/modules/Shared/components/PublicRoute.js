import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';
import Loading from "../../Loading/component/Loading";
import {useAuthenticate} from "../utils/AuthenticateContext";

const PublicRoute = ({
                         component: Component,
                         isLoading, restricted, ...props
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
    } else if (isAuthenticate === true && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;