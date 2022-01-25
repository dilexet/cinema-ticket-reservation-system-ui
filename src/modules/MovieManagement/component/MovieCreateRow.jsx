import React from 'react'
import {Formik} from "formik";
import {Avatar, Box, ButtonGroup, FormHelperText, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import UploadImageContainer from "../../UploadImage/container/UploadImageContainer";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField"
import movieSchema from "../constants/MovieSchema";
import {InitialMovieFieldValues} from "../constants/InitialFieldValues";

const MovieCreateRow = ({
                            theme, moviesState,
                            handleSubmitCreateClick, handleCloseClick,
                            uploadImageState
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

                            <TableCell component="th" scope="row" align="center">
                                <Box component="div" sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Avatar alt="Poster" src={`${BaseURL}${uploadImageState?.data?.posterPath}`}/>
                                    <UploadImageContainer/>
                                </Box>
                                <FormHelperText
                                    style={{minWidth: '150px', color: theme.palette.error.main, textAlign: 'center'}}>
                                    {uploadImageState?.data === null ? 'Please upload poster' : ''}
                                </FormHelperText>
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
                                    {...handleErrorService(moviesState, errors, touched,
                                        "Name", "MovieCreateRequest.Name")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="startDate"
                                    label="StartDate"
                                    type="date"
                                    name="StartDate"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.StartDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    {...handleErrorService(moviesState, errors, touched,
                                        "StartDate", "MovieCreateRequest.StartDate")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="endDate"
                                    label="EndDate"
                                    type="date"
                                    name="EndDate"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.EndDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    {...handleErrorService(moviesState, errors, touched,
                                        "EndDate", "MovieCreateRequest.EndDate")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="releaseDate"
                                    label="ReleaseDate"
                                    type="date"
                                    name="ReleaseDate"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.ReleaseDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    {...handleErrorService(moviesState, errors, touched,
                                        "ReleaseDate", "MovieCreateRequest.ReleaseDate")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="description"
                                    label="Description"
                                    type="text"
                                    name="Description"
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    {...handleErrorService(moviesState, errors, touched,
                                        "Description", "MovieCreateRequest.Description")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="countries"
                                    label="Countries"
                                    type="text"
                                    name="Countries"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Countries}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="Countries"
                                    {...handleErrorService(moviesState, errors, touched,
                                        "Countries", "MovieCreateRequest.Countries")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="genres"
                                    label="Genres"
                                    type="text"
                                    name="Genres"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Genres}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="Genres"
                                    {...handleErrorService(moviesState, errors, touched,
                                        "Genres", "MovieCreateRequest.Genres")}
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
                    </React.Fragment>
                )
            }
        </Formik>

    )
}

export default MovieCreateRow;