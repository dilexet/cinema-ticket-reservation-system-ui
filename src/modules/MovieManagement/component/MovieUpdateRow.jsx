import React from 'react'
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {Formik} from 'formik';
import TextField from "../../Shared/components/TextField"
import handleErrorService from "../../Shared/utils/HandleErrorService";
import movieSchema from "../constants/MovieSchema";

const MovieUpdateRow = ({
                            index, theme, initialValues,
                            handleSubmitEditClick,
                            handleCloseClick, movieState
                        }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={movieSchema}
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
                        <TableCell component="th" scope="row" align="left">
                            -
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
                                {...handleErrorService(movieState, errors, touched, "Name", "MovieUpdateRequest.Name")}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            -
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            -
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            -
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            -
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            -
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            -
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

export default MovieUpdateRow;