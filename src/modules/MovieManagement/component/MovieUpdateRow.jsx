import React from 'react'
import {Formik} from 'formik';
import {Avatar, Box, ButtonGroup, FormHelperText, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "../../Shared/components/TextField"
import handleErrorService from "../../Shared/utils/HandleErrorService";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import UploadImageContainer from "../../UploadImage/container/UploadImageContainer";
import movieSchema from "../constants/MovieSchema";

const MovieUpdateRow = ({
                            index, theme, initialValues,
                            handleSubmitEditClick,
                            handleCloseClick, movieState,
                            uploadImageState
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
                        <TableCell component="th" scope="row" align="center">
                            <Box component="div" sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                {
                                    uploadImageState?.data === null && values.PosterUrl !== null ?
                                        <Avatar alt="Poster" src={`${values.PosterUrl}`}/> :
                                        <Avatar alt="Poster" src={`${BaseURL}${uploadImageState?.data?.posterPath}`}/>
                                }
                                <UploadImageContainer/>
                            </Box>
                            <FormHelperText
                                style={{minWidth: '150px', color: theme.palette.error.main, textAlign: 'center'}}>
                                {uploadImageState?.data === null && values.PosterUrl === null ? 'Please upload poster' : ''}
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
                                {...handleErrorService(movieState, errors, touched,
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
                                {...handleErrorService(movieState, errors, touched,
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
                                {...handleErrorService(movieState, errors, touched,
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
                                {...handleErrorService(movieState, errors, touched,
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
                                {...handleErrorService(movieState, errors, touched,
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
                                {...handleErrorService(movieState, errors, touched,
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
                                {...handleErrorService(movieState, errors, touched,
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
                )
            }
        </Formik>
    )
}

export default MovieUpdateRow;