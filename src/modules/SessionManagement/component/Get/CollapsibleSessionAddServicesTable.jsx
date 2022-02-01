import React from 'react'
import {Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import SessionAddServicesRow from "./SessionAddServicesRow";

const CollapsibleSessionAddServicesTable = ({openServices, addServices}) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={openServices} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Session additional services
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>id</TableCell>
                                    <TableCell align='center'>Service name</TableCell>
                                    <TableCell align='center'>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {addServices.map((service, index) => (
                                    <React.Fragment key={index}>
                                        <SessionAddServicesRow sessionAddService={service} index={index}/>
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

export default CollapsibleSessionAddServicesTable;