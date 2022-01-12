import React from 'react';
import {Avatar, Grid, Typography, Box, FormControlLabel, Checkbox} from '@mui/material';
import LinkMaterial from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';
import {Navigate, Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {InitialFieldValues} from "../constants/InitialFieldValues";
import loginSchema from "../constants/LoginSchema";
import {Formik, Form} from 'formik';
import AuthorizeTextField from "../../Shared/components/AuthorizeTextField";
import AuthorizePasswordField from "../../Shared/components/AuthorizePasswordField";


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
                {"Sign in"}
            </Typography>
            <Typography component="h1" variant="h5" fontStyle={{color: "red"}}>
                {loginState?.error?.validationErrors?.User ?? ""}
            </Typography>

            <Formik
                initialValues={InitialFieldValues}
                validationSchema={loginSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    handleSubmitForm(values)
                }}
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
                                {...((loginState?.error?.validationErrors?.Name ||
                                    (errors?.Name && touched.Name)) && {
                                    error: true,
                                    helperText: loginState?.error?.validationErrors?.Name ||
                                        errors?.Name
                                })}
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
                                {...((loginState?.error?.validationErrors?.Password ||
                                    (errors?.Password && touched.Password)) && {
                                    error: true,
                                    helperText: loginState?.error?.validationErrors?.Password ||
                                        errors?.Password
                                })}
                            />
                            <FormControlLabel
                                onChange={() => setRememberMe(rememberMe => !rememberMe)}
                                control={<Checkbox value={rememberMe} color="primary"/>}
                                label="Remember me"
                            />
                            <LoadingButton
                                type="submit"
                                fullWidth
                                sx={{mt: 3, mb: 2}}
                                loading={loginState?.loading}
                                loadingIndicator="Loading..."
                                variant="outlined"
                            >
                                {"Sign in"}
                            </LoadingButton>
                            <Grid container>
                                <Grid item xs>
                                    <LinkMaterial color='inherit' variant="body2" component={Link} to='/register'>
                                        {"Don't have an account? Sign Up"}
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