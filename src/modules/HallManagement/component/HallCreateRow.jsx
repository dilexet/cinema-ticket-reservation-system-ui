import React from 'react'
import {Formik} from "formik";
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import handleErrorService from "../../Shared/utils/HandleErrorService";
import TextField from "../../Shared/components/TextField"
import hallSchema from "../constants/HallSchema";
import {InitialHallFieldValues} from "../constants/InitialFieldValues";
import SelectField from "../../Shared/components/SelectField";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollapsibleRowsTableChangeContainer from "../container/Shared/CollapsibleRowsTableChangeContainer";

const HallCreateRow = ({
                           theme, hallManagementState, cinemaState,
                           handleSubmitCreateClick, handleCloseClick,
                           openRows, setOpenRows
                       }) => {
    return (
        <Formik
            initialValues={InitialHallFieldValues}
            validationSchema={hallSchema}
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
                                    onClick={() => setOpenRows(!openRows)}
                                >
                                    {openRows ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <SelectField
                                    id='cinemaId' value={values.cinemaId} name="cinemaId"
                                    label="Cinema" onChange={handleChange} onBlur={handleBlur}
                                    defaultField="None" data={cinemaState?.dataList?.cinemas}
                                    itemField='id'
                                    {...handleErrorService(hallManagementState, errors, touched,
                                        "cinemaId")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                <TextField
                                    id="name"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    variant="outlined"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoFocus={true}
                                    autoComplete='HallName'
                                    {...handleErrorService(hallManagementState, errors, touched,
                                        "name", "HallRequest.Name")}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {values.numberOfRows}
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
                        <CollapsibleRowsTableChangeContainer
                            openRows={openRows}
                            setFieldValue={setFieldValue}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                    </React.Fragment>
                )
            }
        </Formik>
    )
}

export default HallCreateRow;