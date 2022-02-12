import React from 'react'
import {Box, Collapse, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@mui/material";

const CollapsibleReservedSessionSeats = ({open, reservedSeats}) => {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: '20px 10px 10px 0'}}>
                <TableContainer>
                    <Table sx={{maxWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Number row</TableCell>
                                <TableCell align="left">Number seat</TableCell>
                                <TableCell align="center">Seat type</TableCell>
                                <TableCell align="center">price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservedSeats?.map((value, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row"
                                               align="left">{value?.seat?.numberRow}</TableCell>
                                    <TableCell component="th" scope="row"
                                               align="left">{value?.seat?.numberSeat}</TableCell>
                                    <TableCell component="th" scope="row"
                                               align="center">{value?.sessionSeatType?.seatType}</TableCell>
                                    <TableCell component="th" scope="row"
                                               align="center">{value?.sessionSeatType?.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Collapse>
    )
}

export default CollapsibleReservedSessionSeats;