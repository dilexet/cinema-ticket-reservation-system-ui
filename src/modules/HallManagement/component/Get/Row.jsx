import React from "react"
import {IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollapsibleSeatsTable from "./CollapsibleSeatsTable";

const Row = ({index, row, setOpenSeats, openSeats}) => {
    return (
        <React.Fragment>
            <TableRow>
                <TableCell align='left'>{index + 1}</TableCell>
                <TableCell component="th" scope="row" align="left">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenSeats(!openSeats)}
                    >
                        {openSeats ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell align='center'>{row.numberRow}</TableCell>
                <TableCell align='center'>{row.numberOfSeats}</TableCell>
            </TableRow>
            <CollapsibleSeatsTable openSeats={openSeats} row={row}/>
        </React.Fragment>
    )
}

export default Row;