import React from "react"
import {Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import RowContainer from "../../container/Get/RowContainer";

const CollapsibleRowsTable = ({openRows, hall}) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={openRows} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Rows
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>id</TableCell>
                                    <TableCell align="left"/>
                                    <TableCell align='center'>Number row</TableCell>
                                    <TableCell align='center'>Number of seats</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {hall.rows.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <RowContainer row={row} index={index}/>
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

export default CollapsibleRowsTable;