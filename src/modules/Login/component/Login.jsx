import React from 'react';
import {Avatar, Grid, Typography, Box, FormControlLabel, Checkbox} from '@mui/material';
import LinkMaterial from '@mui/material/Link';
import {Navigate, Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {InitialFieldValues} from "../constants/InitialFieldValues";
import loginSchema from "../constants/LoginSchema";
import {Formik, Form} from 'formik';
import AuthorizeTextField from "../../Shared/components/AuthorizeTextField";
import AuthorizePasswordField from "../../Shared/components/AuthorizePasswordField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import AuthorizeButton from "../../Shared/components/AuthorizeButton";


const Login = ({
                   loginState, handleSubmitForm, redirect, rememberMe,
                   setRememberMe
               }) => {

    if (!loginState?.loading && loginState?.data?.success && redirect) {
        return <Navigate to='/'/>
    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>

            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Typography component="h1" variant="h5" fontStyle={{color: "red"}}>
                {loginState?.error?.validationErrors?.User ?? ""}
            </Typography>

            <Formik
                initialValues={InitialFieldValues}
                validationSchema={loginSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={handleSubmitForm}
            >
                {
                    ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         handleSubmit,
                     }) => (

                        <Box component={Form} sx={{mt: 3}} onSubmit={handleSubmit}>
                            <AuthorizeTextField
                                id="name"
                                type="text"
                                label="Name"
                                name="Name"
                                value={values.Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="Name"
                                autoFocus={true}
                                {...handleErrorService(loginState, errors, touched, "Name")}
                            />
                            <AuthorizePasswordField
                                name="Password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={values.Password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                {...handleErrorService(loginState, errors, touched, "Password")}
                            />
                            <FormControlLabel
                                onChange={() => setRememberMe(rememberMe => !rememberMe)}
                                control={<Checkbox value={rememberMe} color="primary"/>}
                                label="Remember me"
                            />
                            <AuthorizeButton loading={loginState?.loading} buttonText='Sign in'/>
                            <Grid container>
                                <Grid item xs>
                                    <LinkMaterial color='inherit' variant="body2" component={Link} to='/register'>
                                        Don't have an account? Sign Up
                                    </LinkMaterial>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                }
            </Formik>
        </Box>
    );
}

export default Login;