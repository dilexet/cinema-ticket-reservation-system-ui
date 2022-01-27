import React from 'react'
import {Formik} from "formik";
import {
    ButtonGroup,
    FormControl,
    FormHelperText,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TableCell,
    TableRow
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField"
import {creatingAdditionalServiceSchema} from "../constants/AdditionalServiceSchema";
import {InitialAdditionalServiceFieldValues} from "../constants/InitialFieldValues";
import SelectField from "../../Shared/components/SelectField";

const AdditionalServiceCreateRow = ({
                                        theme, serviceState, cinemaState,
                                        handleSubmitCreateClick, handleCloseClick
                                    }) => {
    return (
        <Formik
            initialValues={InitialAdditionalServiceFieldValues}
            validationSchema={creatingAdditionalServiceSchema}
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
                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row" align="left">
                            -
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            <SelectField
                                id='cinemaId' value={values.CinemaId} name="CinemaId"
                                label="Cinema" onChange={handleChange} onBlur={handleBlur}
                                defaultField="None" data={cinemaState?.dataList?.cinemas}
                                itemField='id'
                                {...handleErrorService(serviceState, errors, touched,
                                    "CinemaId")}
                            />
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
                                {...handleErrorService(serviceState, errors, touched,
                                    "Name", "AdditionalServiceRequest.Name")}
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

export default AdditionalServiceCreateRow;