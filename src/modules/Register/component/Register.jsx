import React from 'react';
import {Navigate, Link} from "react-router-dom";
import {Formik, Form} from 'formik';
import {Avatar, Grid, Typography, Box, FormControlLabel, Checkbox, Link as LinkMaterial} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthorizeTextField from "../../Shared/components/AuthorizeTextField";
import AuthorizePasswordField from "../../Shared/components/AuthorizePasswordField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import AuthorizeButton from "../../Shared/components/AuthorizeButton";
import {InitialFieldValues} from "../constants/InitialFieldValues";
import registerSchema from "../constants/RegisterSchema";

const Register = ({
                      registerState, handleSubmitForm, redirect, rememberMe,
                      setRememberMe
                  }) => {

    if (!registerState?.loading && registerState?.data?.success && redirect) {
        return <Navigate to='/'/>
    }

    return (<Box
        sx={{
            marginTop: 8, display: 'flex', flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>

        <Typography component="h1" variant="h5" fontStyle={{color: "red"}}>
            {registerState?.error?.validationErrors?.User ?? ""}
        </Typography>

        <Formik
            initialValues={InitialFieldValues}
            validationSchema={registerSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleSubmitForm}
        >
            {({
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
                        {...handleErrorService(registerState, errors, touched, "Name")}
                    />
                    <AuthorizeTextField
                        id="email"
                        type='email'
                        label="Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        {...handleErrorService(registerState, errors, touched, "Email")}
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
                        {...handleErrorService(registerState, errors, touched, "Password")}
                    />
                    <AuthorizePasswordField
                        name="ConfirmPassword"
                        label="ConfirmPassword"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        value={values.ConfirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...handleErrorService(registerState, errors, touched, "ConfirmPassword")}
                    />
                    <FormControlLabel
                        onChange={() => setRememberMe(rememberMe => !rememberMe)}
                        control={<Checkbox value={rememberMe} color="primary"/>}
                        label="Remember me"
                    />
                    <AuthorizeButton loading={registerState?.loading} buttonText='Sign up'/>
                    <Grid container>
                        <Grid item>
                            <LinkMaterial color='inherit' variant="body2" component={Link} to='/login'>
                                Already have an account? Sign in
                            </LinkMaterial>
                        </Grid>
                    </Grid>
                </Box>)}
        </Formik>
    </Box>);
}

export default Register;