import React from 'react'
import {Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import SessionSeatsRow from "./SessionSeatsRow";

const CollapsibleSessionSeatsTable = ({openSeats, sessionSeats}) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={openSeats} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Session seats
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>id</TableCell>
                                    <TableCell align='center'>Number seat</TableCell>
                                    <TableCell align='center'>Number row</TableCell>
                                    <TableCell align='center'>Seat type</TableCell>
                                    <TableCell align='center'>Price</TableCell>
                                    <TableCell align='center'>Ticket state</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sessionSeats.map((seat, index) => (
                                    <React.Fragment key={index}>
                                        <SessionSeatsRow sessionSeat={seat} index={index}/>
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

export default CollapsibleSessionSeatsTable;