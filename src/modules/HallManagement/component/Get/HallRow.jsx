import React from "react"
import {IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteButtonGroup from "../../../Shared/components/DeleteButtonGroup";
import RowActionsButtonGroup from "../../../Shared/components/RowActionsButtonGroup";
import CollapsibleRowsTable from "./CollapsibleRowsTable";

const HallRow = ({
                     index, hall, theme, isDisable, openDeleteId,
                     handleSubmitDeleteClick, handleCloseClick,
                     handleEditClick, handleDeleteClick,
                     openRows, setOpenRows
                 }) => {
    return (
        <React.Fragment>
            <TableRow
                key={index}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                style={{
                    backgroundColor: isDisable ? theme.palette.grey[900] : theme.palette.grey[1000]
                }}
            >
                <TableCell component="th" scope="row" align="left">
                    {index + 1}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenRows(!openRows)}
                    >
                        {openRows ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {hall.cinemaName}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {hall.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {hall.numberOfRows}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                    {openDeleteId === index ?
                        <DeleteButtonGroup
                            theme={theme}
                            handleSubmitDeleteClick={handleSubmitDeleteClick}
                            handleCloseClick={handleCloseClick}
                        /> :
                        <RowActionsButtonGroup
                            theme={theme}
                            handleDeleteClick={handleDeleteClick}
                            handleEditClick={handleEditClick}
                            isDisable={isDisable}
                        />

                    }
                </TableCell>
            </TableRow>
            <CollapsibleRowsTable hall={hall} openRows={openRows}/>
        </React.Fragment>
    )
}

export default HallRow;