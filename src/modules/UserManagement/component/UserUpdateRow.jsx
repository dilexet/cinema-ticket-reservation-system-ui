import React from 'react'
import {Formik} from 'formik';
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "../../Shared/components/TextField"
import handleErrorService from "../../Shared/utils/HandleErrorService";
import updateUserSchema from "../constants/UpdateUserSchema";

const UserUpdateRow = ({
                           index, theme, initialValues,
                           handleSubmitEditClick,
                           handleCloseClick, userManagementState
                       }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={updateUserSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleSubmitEditClick}
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
                    <TableRow key={index}
                              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        <TableCell component="th" scope="row" align="left">
                            {index + 1}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            <TextField
                                id="name"
                                type="text"
                                name="Name"
                                variant="standard"
                                size="small"
                                inputProps={{style: {textAlign: 'center'}}}
                                value={values.Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="Name"
                                autoFocus={true}
                                {...handleErrorService(userManagementState, errors, touched, "Name", "UserUpdateRequest.Name")}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            <TextField
                                id="email"
                                type="email"
                                name="Email"
                                variant="standard"
                                size="small"
                                inputProps={{style: {textAlign: 'center'}}}
                                value={values.Email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="Email"
                                {...handleErrorService(userManagementState, errors, touched, "Email", "UserUpdateRequest.Email")}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            <TextField
                                id="roleName"
                                type="text"
                                name="RoleName"
                                variant="standard"
                                size="small"
                                inputProps={{style: {textAlign: 'center'}}}
                                value={values.RoleName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="RoleName"
                                {...handleErrorService(userManagementState, errors, touched, "RoleName", "UserUpdateRequest.RoleName")}
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
                )
            }
        </Formik>
    )
}

export default UserUpdateRow;