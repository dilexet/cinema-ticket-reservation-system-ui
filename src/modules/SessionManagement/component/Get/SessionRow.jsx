import React from "react"
import {IconButton, TableCell, TableRow} from "@mui/material";
import DeleteButtonGroup from "../../../Shared/components/DeleteButtonGroup";
import RowActionsButtonGroup from "../../../Shared/components/RowActionsButtonGroup";
import CollapsibleSessionSeatsTable from "./CollapsibleSessionSeatsTable";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollapsibleSessionAddServicesTable from "./CollapsibleSessionAddServicesTable";

const SessionRow = ({
                        index, session, theme, isDisable, openDeleteId,
                        handleSubmitDeleteClick, handleCloseClick,
                        handleEditClick, handleDeleteClick,
                        openAdditionalRows, setOpenAdditionalRows
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
                        onClick={() => setOpenAdditionalRows(!openAdditionalRows)}
                    >
                        {openAdditionalRows ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {session.hall.cinemaName}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {session.hall.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {session.movie.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {session.startDate}
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
            <CollapsibleSessionSeatsTable openSeats={openAdditionalRows} sessionSeats={session.sessionSeats}/>
            <CollapsibleSessionAddServicesTable openServices={openAdditionalRows}
                                                addServices={session.sessionAdditionalServices}/>
        </React.Fragment>
    )
}

export default SessionRow;