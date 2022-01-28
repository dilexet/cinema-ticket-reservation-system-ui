import React from "react"
import {Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import SeatRow from "./SeatRow";

const CollapsibleSeatsTable = ({openSeats, row}) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={openSeats} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Seats
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>id</TableCell>
                                    <TableCell align='center'>Number seat</TableCell>
                                    <TableCell align='center'>Seat type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row.seats.map((seat, index) => (
                                    <React.Fragment key={index}>
                                        <SeatRow seat={seat} index={index}/>
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default CollapsibleSeatsTable;