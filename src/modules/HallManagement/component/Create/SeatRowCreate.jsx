import React from 'react'
import {TableCell, TableRow} from "@mui/material";
import handleErrorService from "../../../Shared/utils/HandleErrorService";
import TextField from "../../../Shared/components/TextField";
import SelectField from "../../../Shared/components/SelectField";

const SeatRowCreate = ({
                           index,
                           values,
                           handleChange,
                           handleBlur,
                           errors,
                           touched,
                           hallManagementState,
                           seatTypeState,
                           indexRow
                       }) => {
    return (
        <TableRow>
            <TableCell align='left'>{index + 1}</TableCell>
            <TableCell align='center'>
                <TextField
                    id={`rows[${indexRow}].Seats[${index}].NumberSeat`}
                    label="NumberSeat"
                    type="number"
                    name={`Rows[${indexRow}].Seats[${index}].NumberSeat`}
                    formControlStyle={{maxWidth: '200px'}}
                    variant="outlined"
                    inputProps={{style: {textAlign: 'center'}, min: '0'}}
                    value={values.Rows[indexRow].Seats[index].NumberSeat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus={true}
                    {...handleErrorService(hallManagementState, errors, touched,
                        `Rows[${indexRow}].Seats[${index}].NumberSeat`, `HallRequest.Rows[${indexRow}].Seats[${index}].NumberSeat`)}
                />
            </TableCell>
            <TableCell align='center'>
                <SelectField
                    id={`rows[${indexRow}].Seats[${index}].SeatType`}
                    value={values.Rows[indexRow].Seats[index].SeatType}
                    name={`Rows[${indexRow}].Seats[${index}].SeatType`}
                    label="SeatType" onChange={handleChange} onBlur={handleBlur}
                    defaultField="None" data={seatTypeState?.data?.seatTypes}
                    itemField='name'
                    {...handleErrorService(hallManagementState, errors, touched,
                        `Rows[${indexRow}].Seats[${index}].SeatType`)}
                />
            </TableCell>
        </TableRow>
    )
}

export default SeatRowCreate;