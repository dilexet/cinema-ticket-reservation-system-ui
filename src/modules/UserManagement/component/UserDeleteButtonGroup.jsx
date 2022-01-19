import React from 'react'
import {ButtonGroup, IconButton} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const UserDeleteButtonGroup = ({handleSubmitDeleteClick, handleCloseClick, theme}) => {
    return (
        <ButtonGroup>
            <IconButton aria-label='edit' onClick={handleSubmitDeleteClick}
                        style={{marginLeft: '5px', marginRight: '5px'}}>
                <DoneIcon style={{fill: theme.palette.success.dark}}/>
            </IconButton>
            <IconButton aria-label='delete' onClick={handleCloseClick}
                        style={{marginLeft: '5px', marginRight: '5px'}}>
                <CloseIcon style={{fill: theme.palette.error.dark}}/>
            </IconButton>
        </ButtonGroup>
    )
}

export default UserDeleteButtonGroup;