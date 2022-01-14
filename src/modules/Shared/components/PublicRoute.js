import React from 'react';
import {Navigate} from 'react-router-dom';
import {tokenIsExpired} from '../utils/TokenServices';

const PublicRoute = ({component: Component, restricted, ...props}) => {
    if (!tokenIsExpired() && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;