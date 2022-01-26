import React from 'react'
import {Formik} from 'formik';
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "../../Shared/components/TextField"
import handleErrorService from "../../Shared/utils/HandleErrorService";
import {updatingAdditionalServiceSchema} from "../constants/AdditionalServiceSchema";

const AdditionalServiceUpdateRow = ({
                                        index, theme, initialValues,
                                        handleSubmitEditClick,
                                        handleCloseClick, serviceState
                                    }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={updatingAdditionalServiceSchema}
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
                            {values.CinemaName}
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
                                {...handleErrorService(serviceState, errors, touched, "Name", "AdditionalServiceRequest.Name")}
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

export default AdditionalServiceUpdateRow;