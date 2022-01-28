import React from 'react'
import {Formik} from "formik";
import movieSchema from "../constants/MovieSchema";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import TextField from "../../Shared/components/TextField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TableCellCreatingImage from "./TableCellCreatingImage";
import TableCellUpdatingImage from "./TableCellUpdatingImage";

const MovieForm = ({
                       index, initialValues, handleSubmit, state,
                       uploadImageState, theme, handleCloseClick, isCreate
                   }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={movieSchema}
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
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" align="left">
                                {index === undefined ? '-' : index + 1}
                            </TableCell>
                            {
                                isCreate ?
                                    <TableCellCreatingImage
                                        uploadImageState={uploadImageState}
                                        theme={theme} movieState={state}
                                    /> : <TableCellUpdatingImage
                                        uploadImageState={uploadImageState} values={values}
                                        theme={theme} movieState={state}
                                    />
                            }
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
                                    {...handleErrorService(state, errors, touched,
                                        "Name", "MovieRequest.Name")}
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
                                    {...handleErrorService(state, errors, touched,
                                        "StartDate", "MovieRequest.StartDate")}
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
                                    {...handleErrorService(state, errors, touched,
                                        "EndDate", "MovieRequest.EndDate")}
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
                                    {...handleErrorService(state, errors, touched,
                                        "ReleaseDate", "MovieRequest.ReleaseDate")}
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
                                    {...handleErrorService(state, errors, touched,
                                        "Description", "MovieRequest.Description")}
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
                                    {...handleErrorService(state, errors, touched,
                                        "Countries", "MovieRequest.Countries")}
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
                                    {...handleErrorService(state, errors, touched,
                                        "Genres", "MovieRequest.Genres")}
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

export default MovieForm;