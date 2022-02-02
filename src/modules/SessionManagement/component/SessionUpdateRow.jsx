import React from 'react'
import {Formik} from "formik";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "../../Shared/components/TextField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import CollapsibleSessionSeatTypeTableUpdateContainer
    from "../container/Update/CollapsibleSessionSeatTypeTableUpdateContainer";
import CollapsibleSessionAddServicesTableUpdateContainer
    from "../container/Update/CollapsibleSessionAddServicesTableUpdateContainer";
import sessionSchema from "../constants/SessionSchema";

const SessionUpdateRow = ({
                              index, theme, initialValues,
                              handleSubmitEditClick,
                              handleCloseClick, sessionState,
                              openRows, setOpenRows
                          }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={sessionSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleSubmitEditClick}
        >
            {
                ({
                     values,
                     setFieldValue,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                 }) => (
                    <React.Fragment>
                        <TableRow key={index}
                                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row" align="left">
                                {index + 1}
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpenRows(!openRows)}
                                >
                                    {openRows ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {values.cinemaName}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {values.hallName}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {values.movieName}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="startDate"
                                    label="StartDate"
                                    type="datetime-local"
                                    name="startDate"
                                    variant="outlined"
                                    inputProps={{
                                        style: {textAlign: 'center'},
                                    }}
                                    value={values.startDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    {...handleErrorService(sessionState, errors, touched,
                                        "startDate", "HallRequest.StartDate")}
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
                        <CollapsibleSessionSeatTypeTableUpdateContainer
                            openRows={openRows}
                            setFieldValue={setFieldValue}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur} sessionState={sessionState}
                        />
                        <CollapsibleSessionAddServicesTableUpdateContainer
                            openRows={openRows}
                            setFieldValue={setFieldValue}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur} sessionState={sessionState}
                        />
                    </React.Fragment>
                )
            }
        </Formik>
    )
}

export default SessionUpdateRow;