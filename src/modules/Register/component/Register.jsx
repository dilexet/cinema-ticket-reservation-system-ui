import React from 'react';
import {Formik, Form} from 'formik';
import {
    Avatar,
    Grid,
    Typography,
    Box,
    FormControlLabel,
    Checkbox,
    Link as LinkMaterial,
    Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from "../../Shared/components/TextField";
import PasswordTextField from "../../Shared/components/PasswordTextField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import AuthorizeButton from "../../Shared/components/AuthorizeButton";
import {InitialFieldValues} from "../constants/InitialFieldValues";
import registerSchema from "../constants/RegisterSchema";

const Register = ({
                      registerState, handleSubmitForm, rememberMe,
                      setRememberMe, handleToLoginLinkClick
                  }) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} maxWidth="sm">
            <Box
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
                            <TextField
                                id="name"
                                type="text"
                                label="Name"
                                name="Name"
                                variant="outlined"
                                margin="normal"
                                outlinedInputStyle={{borderRadius: "20px"}}
                                value={values.Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="Name"
                                autoFocus={true}
                                {...handleErrorService(registerState, errors, touched, "Name", "Name")}
                            />
                            <TextField
                                id="email"
                                type='email'
                                label="Email"
                                name="Email"
                                variant="outlined"
                                margin="normal"
                                outlinedInputStyle={{borderRadius: "20px"}}
                                value={values.Email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="email"
                                {...handleErrorService(registerState, errors, touched, "Email", "Email")}
                            />
                            <PasswordTextField
                                name="Password"
                                label="Password"
                                type="password"
                                id="password"
                                variant="outlined"
                                margin="normal"
                                style={{borderRadius: "20px"}}
                                value={values.Password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                {...handleErrorService(registerState, errors, touched, "Password", "Password")}
                            />
                            <PasswordTextField
                                name="ConfirmPassword"
                                label="ConfirmPassword"
                                type="password"
                                id="confirmPassword"
                                variant="outlined"
                                margin="normal"
                                style={{borderRadius: "20px"}}
                                value={values.ConfirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                {...handleErrorService(registerState, errors, touched, "ConfirmPassword", "ConfirmPassword")}
                            />
                            <FormControlLabel
                                onChange={() => setRememberMe(rememberMe => !rememberMe)}
                                control={<Checkbox value={rememberMe} color="primary"/>}
                                label="Remember me"
                            />
                            <AuthorizeButton loading={registerState?.loading} buttonText='Sign up'/>
                            <Grid container>
                                <Grid item>
                                    <LinkMaterial color='inherit' variant="body2" style={{cursor: 'pointer'}}
                                                  onClick={handleToLoginLinkClick}>
                                        Already have an account? Sign in
                                    </LinkMaterial>
                                </Grid>
                            </Grid>
                        </Box>)}
                </Formik>
            </Box>
        </Container>
    );
}

export default Register;