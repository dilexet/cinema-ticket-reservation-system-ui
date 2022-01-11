import React from 'react';
import {Avatar, Grid, Typography, Button, Box, TextField} from '@mui/material';
import LinkMaterial from '@mui/material/Link';
import {Navigate, Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ({loginState, handleSubmit, handleInputChange, values, redirect}) => {

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
                Login
            </Typography>

            <Typography component="h1" variant="h5" fontStyle={{color: "red"}}>
                {loginState?.error?.validationErrors?.User ?? ""}
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
                    {...(loginState?.error?.validationErrors?.Name && {
                        error: true,
                        helperText: loginState?.error?.validationErrors?.Name
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
                    {...(loginState?.error?.validationErrors?.Password && {
                        error: true,
                        helperText: loginState?.error?.validationErrors?.Password
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
                    disabled={loginState?.loading}
                >
                    Login
                </Button>
                <Grid container>
                    <Grid item>
                        <LinkMaterial color='inherit' component={Link} to='/register'>
                            Don't have an account?
                        </LinkMaterial>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Login;