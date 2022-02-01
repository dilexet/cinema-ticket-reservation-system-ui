import React from 'react'
import {TableCell, TableRow} from "@mui/material";

const SessionSeatsRow = ({index, sessionSeat}) => {
    return (
        <TableRow>
            <TableCell align='left'>{index + 1}</TableCell>
            <TableCell align='center'>{sessionSeat.seat.numberSeat}</TableCell>
            <TableCell align='center'>{sessionSeat.seat.numberRow}</TableCell>
            <TableCell align='center'>{sessionSeat.seat.seatType}</TableCell>
            <TableCell align='center'>{sessionSeat.sessionSeatType.price}</TableCell>
            <TableCell align='center'>{sessionSeat.ticketState}</TableCell>
        </TableRow>
    )
}

export default SessionSeatsRow;