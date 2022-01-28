import React from 'react'
import {IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "../../../Shared/components/TextField";
import {handleRowsError} from "../../../Shared/utils/HandleErrorService";
import CollapsibleSeatTableChangeContainer from "../../container/Shared/CollapsibleSeatTableChangeContainer";

const RowChange = ({
                       index,
                       values,
                       handleChange,
                       handleBlur,
                       errors,
                       touched,
                       hallManagementState,
                       setOpenSeats,
                       openSeats,
                       setFieldValue
                   }) => {
    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row" align='left'>{index + 1}</TableCell>
                <TableCell component="th" scope="row" align="left">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenSeats(!openSeats)}
                    >
                        {openSeats ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align='center'>
                    <TextField
                        id={`rows[${index}].numberRow`}
                        label="NumberRow"
                        type="number"
                        name={`rows[${index}].numberRow`}
                        formControlStyle={{maxWidth: '200px'}}
                        variant="outlined"
                        inputProps={{style: {textAlign: 'center'}, min: '0'}}
                        value={values.rows[index].numberRow}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...handleRowsError(hallManagementState, errors, index)}
                    />
                </TableCell>
                <TableCell component="th" scope="row" align='center'>{values.rows[index].numberOfSeats}</TableCell>
            </TableRow>
            <CollapsibleSeatTableChangeContainer
                setFieldValue={setFieldValue}
                indexRow={index}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched} openSeats={openSeats}/>
        </React.Fragment>
    )
}

export default RowChange;