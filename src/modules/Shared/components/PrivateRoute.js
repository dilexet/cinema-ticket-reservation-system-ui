import React from 'react';
import {Navigate} from 'react-router-dom';
import {tokenIsExpired} from '../utils/TokenServices';

const PrivateRoute = ({component: Component, ...props}) => {
    return tokenIsExpired() ? <Navigate to='/login'/> : <Component {...props}/>;
};

export default PrivateRoute;