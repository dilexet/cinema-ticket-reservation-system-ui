import React from 'react'
import {Formik} from "formik";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField"
import PasswordTextField from "../../Shared/components/PasswordTextField"
import createUserSchema from "../constants/CreateUserSchema";
import {InitialFieldValuesForCreate} from "../constants/InitialFieldValues";

const UserCreateRow = ({
                           theme, userManagementState,
                           handleSubmitCreateClick, handleCloseClick
                       }) => {
    return (
        <Formik
            initialValues={InitialFieldValuesForCreate}
            validationSchema={createUserSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleSubmitCreateClick}
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
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" align="left">
                                -
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="name"
                                    label="Name"
                                    type="text"
                                    name="Name"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="Name"
                                    autoFocus={true}
                                    {...handleErrorService(userManagementState, errors, touched, "Name", "UserCreateRequest.Name")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    name="Email"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="Email"
                                    {...handleErrorService(userManagementState, errors, touched, "Email", "UserCreateRequest.Email")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="roleName"
                                    label="RoleName"
                                    type="text"
                                    name="RoleName"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.RoleName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="RoleName"
                                    {...handleErrorService(userManagementState, errors, touched, "RoleName", "UserCreateRequest.RoleName")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                                <ButtonGroup>
                                    <IconButton aria-label='submit' onClick={() => handleSubmit(values)}
                                                style={{marginLeft: '5px', marginRight: '5px'}}>
                                        <DoneIcon style={{fill: theme.palette.success.dark}}/>
                                    </IconButton>
                                    <IconButton aria-label='close' onClick={handleCloseClick}
                                                style={{marginLeft: '5px', marginRight: '5px'}}>
                                        <CloseIcon style={{fill: theme.palette.error.dark}}/>
                                    </IconButton>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row" align="left">
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <PasswordTextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    name="Password"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="current-password"
                                    {...handleErrorService(userManagementState, errors, touched, "Password", "UserUpdateRequest.Password")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <PasswordTextField
                                    id="confirmPassword"
                                    label="ConfirmPassword"
                                    type="password"
                                    name="ConfirmPassword"
                                    variant="outlined"

                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.ConfirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="current-password"
                                    {...handleErrorService(userManagementState, errors, touched, "ConfirmPassword", "UserUpdateRequest.ConfirmPassword")}
                                />
                            </TableCell>
                        </TableRow>
                    </React.Fragment>
                )
            }
        </Formik>

    )
}

export default UserCreateRow;