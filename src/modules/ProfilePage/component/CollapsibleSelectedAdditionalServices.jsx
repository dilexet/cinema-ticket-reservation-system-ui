import React from 'react'
import {Box, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const CollapsibleSelectedAdditionalServices = ({open, selectedServices}) => {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: '20px 10px 10px 0'}}>
                <TableContainer>
                    <Table sx={{maxWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Service</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selectedServices?.map((value, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row"
                                               align="left">{value?.selectedSessionAdditionalService?.additionalService?.name}</TableCell>
                                    <TableCell component="th" scope="row"
                                               align="center">
                                        {value?.numberOfServices}
                                        &nbsp;*&nbsp;
                                        {value?.selectedSessionAdditionalService?.price}
                                        &nbsp;$
                                        &nbsp;=&nbsp;
                                        {value?.selectedSessionAdditionalService?.price * value?.numberOfServices}
                                        &nbsp;$
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Collapse>
    )
}

export default CollapsibleSelectedAdditionalServices;