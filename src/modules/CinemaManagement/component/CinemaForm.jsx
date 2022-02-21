import React from 'react'
import {Formik} from "formik";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField"
import cinemaSchema from "../constants/CinemaSchema";
import MapContainer from "../container/MapContainer";

const CinemaForm = ({index, initialValues, handleSubmit, state, theme, handleCloseClick}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={cinemaSchema}
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
                     setFieldValue,
                 }) => (
                    <>

                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row" align="left">
                                {index === undefined ? '-' : index + 1}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="name"
                                    label='Name'
                                    type="text"
                                    name="Name"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoFocus={true}
                                    {...handleErrorService(state, errors, touched,
                                        "Name", "CinemaRequest.Name")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="country"
                                    label='Country'
                                    type="text"
                                    name="Country"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Country}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={true}
                                    {...handleErrorService(state, errors, touched,
                                        "Country", "CinemaRequest.Country")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="city"
                                    label='City'
                                    type="text"
                                    name="City"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.City}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={true}
                                    {...handleErrorService(state, errors, touched,
                                        "City", "CinemaRequest.City")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="street"
                                    label='Street'
                                    type="text"
                                    name="Street"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.Street}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={true}
                                    {...handleErrorService(state, errors, touched,
                                        "Street", "CinemaRequest.Street")}
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
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell colSpan={6}>
                                <MapContainer setFieldValue={setFieldValue} latitude={values.Latitude} longitude={values.Longitude}/>
                            </TableCell>
                        </TableRow>
                    </>
                )
            }
        </Formik>
    )
}

export default CinemaForm;