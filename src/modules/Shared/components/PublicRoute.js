import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';

const PublicRoute = ({component: Component, restricted, ...props}) => {
    const [isAuthenticate, setIsAuthenticate] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;

        async function checkAuthorize() {
            const result = await isAuthorize();
            setIsAuthenticate(result)
        }

        checkAuthorize()
        return () => cleanupFunction = true;
    }, [isAuthenticate]);

    if (isAuthenticate === null) {
        return <div>Loading...</div>
    } else if (isAuthenticate === true && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;