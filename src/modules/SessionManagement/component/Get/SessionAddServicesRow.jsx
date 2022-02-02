import React from 'react'
import {TableCell, TableRow} from "@mui/material";

const SessionAddServicesRow = ({index, sessionAddService}) => {
    return (
        <TableRow>
            <TableCell align='left'>{index + 1}</TableCell>
            <TableCell align='center'>{sessionAddService.additionalService.name}</TableCell>
            <TableCell align='center'>{sessionAddService.price}</TableCell>
        </TableRow>
    )
}

export default SessionAddServicesRow;