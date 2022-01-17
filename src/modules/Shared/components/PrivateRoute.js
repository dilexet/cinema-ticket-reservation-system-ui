import React from 'react';
import {Navigate} from 'react-router-dom';
import {isAuthorize} from '../utils/TokenServices';

const PrivateRoute = ({component: Component, ...props}) => {
    if (isAuthorize()) {
        return <Component {...props}/>
    } else {
        return <Navigate to='/login'/>
    }
};

export default PrivateRoute;