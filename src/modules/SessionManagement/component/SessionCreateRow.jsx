import React from 'react'
import {Formik} from "formik";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import SelectField from "../../Shared/components/SelectField";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField";
import {InitialSessionFieldValues} from "../constants/InitialFieldValues";
import sessionSchema from "../constants/SessionSchema";
import CollapsibleSessionAddServicesTableCreateContainer
    from "../container/Create/CollapsibleSessionAddServicesTableCreateContainer";
import CollapsibleSessionSeatTypeTableCreateContainer
    from "../container/Create/CollapsibleSessionSeatTypeTableCreateContainer";

const SessionCreateRow = ({
                              cinemaState, hallState, movieState, sessionState,
                              handleSubmitCreateClick, handleCloseClick, getHalls, clearDataList,
                              getAdditionalServices, openRows, setOpenRows, theme
                          }) => {
    return (
        <Formik
            initialValues={InitialSessionFieldValues}
            validationSchema={sessionSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleSubmitCreateClick}
        >
            {
                ({
                     values,
                     setFieldValue,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit
                 }) => (
                    <React.Fragment>
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" align="left">
                                -
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    disabled={values.cinemaId === '' || values.hallId === ''}
                                    onClick={() => setOpenRows(!openRows)}
                                >
                                    {openRows ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <SelectField
                                    id='cinemaId' value={values.cinemaId} name="cinemaId"
                                    label="Cinema"
                                    onChange={async (e) => {
                                        setFieldValue('cinemaId', e.target.value);
                                        if (e.target.value !== null && e.target.value !== "") {
                                            await getHalls(e.target.value)
                                            await getAdditionalServices(e.target.value)
                                        } else {
                                            await clearDataList()
                                        }
                                    }}
                                    onBlur={handleBlur}
                                    defaultField="None" data={cinemaState?.dataList?.cinemas}
                                    itemField='id'
                                    {...handleErrorService(hallState, errors, touched,
                                        "cinemaId")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <SelectField
                                    id='hallId' value={values.hallId} name="hallId"
                                    label="Hall" onChange={handleChange} onBlur={handleBlur}
                                    defaultField="None" data={hallState?.dataList?.halls}
                                    itemField='id'
                                    {...handleErrorService(hallState, errors, touched,
                                        "hallId")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <SelectField
                                    id='movieId' value={values.movieId} name="movieId"
                                    label="Movie" onChange={handleChange} onBlur={handleBlur}
                                    defaultField="None" data={movieState?.dataList?.movies}
                                    itemField='id'
                                    {...handleErrorService(hallState, errors, touched,
                                        "movieId")}
                                />
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
                                        "startDate", "SessionRequest.StartDate")}
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
                        <CollapsibleSessionSeatTypeTableCreateContainer
                            openRows={openRows}
                            setFieldValue={setFieldValue}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur} sessionState={sessionState}
                        />
                        <CollapsibleSessionAddServicesTableCreateContainer
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

export default SessionCreateRow;