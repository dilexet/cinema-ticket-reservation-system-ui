import React from 'react'
import {TableCell, TableRow} from "@mui/material";
import TextField from "../../../Shared/components/TextField";
import {handleServicesError} from "../../../Shared/utils/HandleErrorService";

const SessionAdditionalServiceChange = ({
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
                       align='center'>{values.sessionAdditionalServices[index].name}</TableCell>
            <TableCell component="th" scope="row" align='center'>
                <TextField
                    id={`sessionAdditionalServices[${index}].price`}
                    label="Price"
                    type="number"
                    name={`sessionAdditionalServices[${index}].price`}
                    formControlStyle={{maxWidth: '200px'}}
                    variant="outlined"
                    inputProps={{style: {textAlign: 'center'}, min: '0'}}
                    value={values.sessionAdditionalServices[index].price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...handleServicesError(sessionManagementState, errors, index)}
                />
            </TableCell>
        </TableRow>
    )
}

export default SessionAdditionalServiceChange;