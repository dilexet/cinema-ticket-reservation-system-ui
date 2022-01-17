import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';

const PrivateRoute = ({component: Component, ...props}) => {
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
    } else if (isAuthenticate === true) {
        return <Component {...props}/>
    } else {
        return <Navigate to='/login'/>
    }
};

export default PrivateRoute;