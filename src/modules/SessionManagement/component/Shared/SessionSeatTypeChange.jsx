import React from 'react'
import {TableCell, TableRow} from "@mui/material";
import TextField from "../../../Shared/components/TextField";
import {handleSessionSeatsTypeError} from "../../../Shared/utils/HandleErrorService";


const SessionSeatTypeChange = ({
                                   index,
                                   values,
                                   handleChange,
                                   handleBlur,
                                   errors,
                                   sessionManagementState
                               }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row" align='left'>{index + 1}</TableCell>
            <TableCell component="th" scope="row"
                       align='center'>{values.sessionSeatTypes[index].seatType}</TableCell>
            <TableCell component="th" scope="row" align='center'>
                <TextField
                    id={`sessionSeatTypes[${index}].price`}
                    label="Price"
                    type="number"
                    name={`sessionSeatTypes[${index}].price`}
                    formControlStyle={{maxWidth: '200px'}}
                    variant="outlined"
                    inputProps={{style: {textAlign: 'center'}, min: '0'}}
                    value={values.sessionSeatTypes[index].price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...handleSessionSeatsTypeError(sessionManagementState, errors, index)}
                />
            </TableCell>
        </TableRow>
    )
}

export default SessionSeatTypeChange;