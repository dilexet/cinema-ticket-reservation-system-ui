import React from 'react'
import {Formik} from "formik";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField"
import movieSchema from "../constants/MovieSchema";
import {InitialMovieFieldValues} from "../constants/InitialFieldValues";

const MovieCreateRow = ({
                            theme, moviesState,
                            handleSubmitCreateClick, handleCloseClick
                        }) => {
    return (
        <Formik
            initialValues={InitialMovieFieldValues}
            validationSchema={movieSchema}
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
                                    {...handleErrorService(moviesState, errors, touched, "Name", "MovieCreateRequest.Name")}
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
                    </React.Fragment>
                )
            }
        </Formik>

    )
}

export default MovieCreateRow;