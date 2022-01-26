import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';
import Loading from "../../../Loading/component/Loading";
import {isAuthorize, isAdmin} from '../../utils/TokenServices';

const AdminRoute = ({
                        component: Component, isAuthenticate,
                        isLoading, setIsAuthenticate, ...props
                    }) => {

    const authenticateState = useSelector((state) => state.authenticate);

    useEffect(() => {
        async function checkAuthorize() {
            if (!isAdmin()) {
                setIsAuthenticate(false)
                console.log("You don't have access to this resource. You are not Admin.")
            } else if (authenticateState.isAuthenticate === false) {
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
    } else if (isAuthenticate === true) {
        return <Component isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate} {...props}/>
    } else {
        return <Navigate to='/login'/>
    }
};

export default AdminRoute;