import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';
import Loading from "../../Loading/component/Loading";
import {useSelector} from "react-redux";

const PublicRoute = ({
                         component: Component, isAuthenticate,
                         setIsAuthenticate, isLoading, restricted, ...props
                     }) => {

    const authenticateState = useSelector((state) => state.authenticate);

    useEffect(() => {
        async function checkAuthorize() {
            if (authenticateState.isAuthenticate === false) {
                setIsAuthenticate(false)
            } else if (isLoading === false && isAuthenticate === false) {
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [authenticateState.isAuthenticate, isAuthenticate, isLoading, setIsAuthenticate]);

    if (isAuthenticate === null) {
        return <Loading isLoading={true}/>
    } else if (isAuthenticate === true && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;