import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';
import Loading from "../../../Loading/component/Loading";
import {isAuthorize, getRole} from '../../utils/TokenServices';
import {Alert, AlertTitle, Container, Stack} from "@mui/material";

const RoleRoute = ({
                       component: Component, isAuthenticate,
                       isLoading, setIsAuthenticate, role, ...props
                   }) => {
    const errorHandlerState = useSelector((state) => state.errorHandler);
    const [haveAccess, setHaveAccess] = React.useState(null);

    useEffect(() => {
        async function checkAuthorize() {
            if (errorHandlerState.isAuthenticate === false) {
                setIsAuthenticate(false)
            } else if (isLoading === false && isAuthenticate === false) {
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [errorHandlerState.isAuthenticate, isAuthenticate, isLoading, setIsAuthenticate]);


    useEffect(() => {
        if (haveAccess == null) {
            setHaveAccess(getRole() === role);
        }
        if (haveAccess === false) {
            console.log(`You don't have access to this resource. You are not ${role}.`)
        }
    }, [haveAccess, role])

    if (isAuthenticate === null || haveAccess === null) {
        return <Loading isLoading={true}/>
    } else if (isAuthenticate === false) {
        return (<Navigate to='/login'/>)
    } else if (haveAccess === false) {
        return (
            <Container component="main" sx={{mt: 2, mb: 2}} maxWidth='lg'>
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Access denied</AlertTitle>
                        You don't have access to this resource.&nbsp;<strong>You are not {role}!</strong>
                    </Alert>
                </Stack>
            </Container>
        )
    } else if (isAuthenticate === true && haveAccess === true) {
        return <Component isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate} {...props}/>
    }
};

export default RoleRoute;