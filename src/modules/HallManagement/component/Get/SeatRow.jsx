import React from "react"
import {TableCell, TableRow} from "@mui/material";

const SeatRow = ({index, seat}) => {
    return (
        <TableRow>
            <TableCell align='left'>{index + 1}</TableCell>
            <TableCell align='center'>{seat.numberSeat}</TableCell>
            <TableCell align='center'>{seat.seatType}</TableCell>
        </TableRow>
    )
}

export default SeatRow;