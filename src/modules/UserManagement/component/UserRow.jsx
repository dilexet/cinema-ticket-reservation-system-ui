import React from "react"
import {TableCell, TableRow} from "@mui/material";
import DeleteButtonGroup from "../../Shared/components/DeleteButtonGroup";
import RowActionsButtonGroup from "../../Shared/components/RowActionsButtonGroup";

const UserRow = ({
                     index, user, theme, isDisable, openDeleteId,
                     handleSubmitDeleteClick, handleCloseClick,
                     handleEditClick, handleDeleteClick
                 }) => {
    return (
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
            <TableCell component="th" scope="row" align="center">
                {user.name}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {user.email}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {user.roleName}
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
    )
}

export default UserRow;