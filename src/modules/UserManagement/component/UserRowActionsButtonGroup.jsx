import React from 'react'
import {ButtonGroup, IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserRowActionsButtonGroup = ({handleEditClick, handleDeleteClick, isDisable, theme}) => {
    return (
        <ButtonGroup>
            <IconButton aria-label='edit' onClick={handleEditClick}
                        disabled={isDisable}
                        style={{marginLeft: '5px', marginRight: '5px'}}>
                <EditIcon style={{fill: theme.palette.info.main}}/>
            </IconButton>
            <IconButton aria-label='delete' onClick={handleDeleteClick}
                        disabled={isDisable}
                        style={{marginLeft: '5px', marginRight: '5px'}}>
                <DeleteIcon style={{fill: theme.palette.error.main}}/>
            </IconButton>
        </ButtonGroup>
    )
}

export default UserRowActionsButtonGroup;