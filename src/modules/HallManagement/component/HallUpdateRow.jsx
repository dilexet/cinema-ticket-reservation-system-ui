import React from 'react'
import {Formik} from 'formik';
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "../../Shared/components/TextField"
import handleErrorService from "../../Shared/utils/HandleErrorService";
import hallSchema from "../constants/HallSchema";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollapsibleRowsTableChangeContainer from "../container/Shared/CollapsibleRowsTableChangeContainer";

const HallUpdateRow = ({
                           index, theme, initialValues,
                           handleSubmitEditClick,
                           handleCloseClick, hallState,
                           openRows, setOpenRows
                       }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={hallSchema}
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
                                <TextField
                                    id="name"
                                    type="text"
                                    name="name"
                                    variant="standard"
                                    size="small"
                                    inputProps={{style: {textAlign: 'center'}}}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="HallName"
                                    autoFocus={true}
                                    {...handleErrorService(hallState, errors, touched, "name", "HallRequest.Name")}
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

export default HallUpdateRow;