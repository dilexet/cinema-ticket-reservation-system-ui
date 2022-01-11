import React from 'react';
import {Avatar, Grid, Typography, Button, Box, TextField} from '@mui/material';
import LinkMaterial from '@mui/material/Link';
import {Navigate, Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Register = ({registerState, handleSubmit, handleInputChange, values, redirect, errors}) => {

    if (!registerState?.loading && registerState?.data?.success && redirect) {
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
                Register
            </Typography>

            <Typography component="h1" variant="h5" fontStyle={{color: "red"}}>
                {registerState?.error?.validationErrors?.User ?? ""}
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    id="name"
                    label="Name"
                    name="Name"
                    value={values.Name}
                    onChange={handleInputChange}
                    autoComplete="Name"
                    autoFocus={true}
                    {...((registerState?.error?.validationErrors?.Name || errors?.Name) && {
                        error: true,
                        helperText: registerState?.error?.validationErrors?.Name || errors?.Name
                    })}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    id="email"
                    type='email'
                    label="Email"
                    name="Email"
                    value={values.Email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    {...((registerState?.error?.validationErrors?.Email || errors?.Email) && {
                        error: true,
                        helperText: registerState?.error?.validationErrors?.Email || errors?.Email
                    })}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    name="Password"
                    value={values.Password}
                    onChange={handleInputChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...((registerState?.error?.validationErrors?.Password ||
                        registerState?.error?.validationErrors?.ConfirmPassword ||
                        errors?.Password || errors?.ConfirmPassword) && {
                        error: true,
                        helperText: registerState?.error?.validationErrors?.Password || errors?.Password
                    })}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    name="ConfirmPassword"
                    value={values.ConfirmPassword}
                    onChange={handleInputChange}
                    label="ConfirmPassword"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    {...((registerState?.error?.validationErrors?.ConfirmPassword ||
                        errors?.ConfirmPassword) && {
                        error: true,
                        helperText: registerState?.error?.validationErrors?.ConfirmPassword ||
                            errors?.ConfirmPassword
                    })}
                />
                <pre>
                    {JSON.stringify(values, null, 2)}
                </pre>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    disabled={registerState?.loading}
                >
                    Register
                </Button>
                <Grid container>
                    <Grid item>
                        <LinkMaterial color='inherit' component={Link} to='/login'>
                            Have an account?
                        </LinkMaterial>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Register;