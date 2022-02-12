import React from "react";
import {Formik} from "formik";
import {Box, Button, Typography} from "@mui/material";
import TextField from "../../Shared/components/TextField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import userProfileSchema from "../constants/UserSchema";

const UserProfile = ({theme, handleSubmit, profileState}) => {
    return (
        <Box style={{
            marginTop: '60px',
            width: '100%'
        }}>
            <Box style={{
                maxWidth: '840px',
                marginBottom: '40px',
            }}>
                <Box style={{
                    marginBottom: '18px'
                }}>
                    <Typography component='h2' style={{
                        opacity: '0.8',
                        paddingBottom: '18px',
                        float: 'left',
                        fontSize: '2.25em',
                        fontWeight: '700',
                        margin: 0
                    }}>
                        My details
                    </Typography>
                </Box>
                <Box style={{
                    maxWidth: '610px',
                    margin: '40px 0',
                    position: 'relative'
                }}>
                    <Formik
                        initialValues={profileState?.data?.userProfile}
                        validationSchema={userProfileSchema}
                        validateOnChange={true}
                        validateOnBlur={true}
                        onSubmit={handleSubmit}
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
                                <React.Fragment>
                                    <TextField
                                        id="name"
                                        label="name"
                                        type="text"
                                        name="name"
                                        variant="outlined"
                                        formControlStyle={{
                                            margin: '10px 0'
                                        }}
                                        outlinedInputStyle={{
                                            borderRadius: '5px',
                                            background: theme.palette.mode === 'dark' ?
                                                'rgba(255, 255, 255, 0.1)' :
                                                'rgba(0, 0, 0, 0.1)'
                                        }}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="name"
                                        autoFocus={true}
                                        {...handleErrorService(profileState, errors, touched, "name", "UserProfileUpdateRequest.Name")}
                                    />
                                    <TextField
                                        id="surname"
                                        label="surname"
                                        type="text"
                                        name="surname"
                                        variant="outlined"
                                        formControlStyle={{
                                            margin: '10px 0'
                                        }}
                                        outlinedInputStyle={{
                                            borderRadius: '5px',
                                            background: theme.palette.mode === 'dark' ?
                                                'rgba(255, 255, 255, 0.1)' :
                                                'rgba(0, 0, 0, 0.1)'
                                        }}
                                        value={values.surname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="surname"
                                        {...handleErrorService(profileState, errors, touched, "surname", "UserProfileUpdateRequest.Surname")}
                                    />

                                    <Box style={{
                                        marginTop: '20px'
                                    }}>
                                        <Button onClick={() => handleSubmit(values)} variant='outlined' style={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                            border: theme.palette.mode === 'dark' ?
                                                '2px solid rgba(255, 255, 255, 0.8)' :
                                                '2px solid rgba(0, 0, 0, 0.8)',
                                            borderRadius: '22px',
                                            height: '44px',
                                            padding: '9px 30px',
                                            position: 'relative',
                                            color: theme.palette.mode === 'dark' ?
                                                'rgba(255, 255, 255, 0.8)' :
                                                'rgba(0, 0, 0, 0.8)',
                                            fontSize: '1em',
                                            textAlign: 'center',
                                            textTransform: 'none',
                                            background: theme.palette.mode === 'dark' ?
                                                'rgba(255, 255, 255, 0)' :
                                                'rgba(0, 0, 0, 0)',
                                        }}>
                                            Save changes
                                        </Button>
                                    </Box>

                                </React.Fragment>
                            )
                        }
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}

export default UserProfile;