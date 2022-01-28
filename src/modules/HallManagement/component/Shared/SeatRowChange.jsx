import React from 'react'
import {TableCell, TableRow} from "@mui/material";
import {
    handleSeatsNumberError,
    handleSeatsTypeError,
} from "../../../Shared/utils/HandleErrorService";
import TextField from "../../../Shared/components/TextField";
import SelectField from "../../../Shared/components/SelectField";

const SeatRowChange = ({
                           index,
                           values,
                           handleChange,
                           handleBlur,
                           errors,
                           hallManagementState,
                           seatTypeState,
                           indexRow
                       }) => {
    return (
        <TableRow>
            <TableCell align='left'>{index + 1}</TableCell>
            <TableCell align='center'>
                <TextField
                    id={`rows[${indexRow}].seats[${index}].numberSeat`}
                    label="NumberSeat"
                    type="number"
                    name={`rows[${indexRow}].seats[${index}].numberSeat`}
                    formControlStyle={{maxWidth: '200px'}}
                    variant="outlined"
                    inputProps={{style: {textAlign: 'center'}, min: '0'}}
                    value={values.rows[indexRow].seats[index].numberSeat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...handleSeatsNumberError(hallManagementState, errors, indexRow, index)}
                />
            </TableCell>
            <TableCell align='center'>
                <SelectField
                    id={`rows[${indexRow}].seats[${index}].seatType`}
                    value={values.rows[indexRow].seats[index].seatType}
                    name={`rows[${indexRow}].seats[${index}].seatType`}
                    label="SeatType" onChange={handleChange} onBlur={handleBlur}
                    defaultField="None" data={seatTypeState?.data?.seatTypes}
                    itemField='name'
                    {...handleSeatsTypeError(hallManagementState, errors, indexRow, index)}
                />
            </TableCell>
        </TableRow>
    )
}

export default SeatRowChange;