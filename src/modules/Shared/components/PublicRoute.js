import React from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';

const PublicRoute = ({component: Component, restricted, ...props}) => {
    if (isAuthorize() && restricted) {
        return <Navigate to='/'/>
    } else {
        return <Component {...props}/>
    }
};

export default PublicRoute;