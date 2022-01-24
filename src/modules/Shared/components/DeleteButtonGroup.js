import React from 'react'
import {ButtonGroup, IconButton} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const DeleteButtonGroup = ({handleSubmitDeleteClick, handleCloseClick, theme}) => {
    return (
        <ButtonGroup>
            <IconButton aria-label='confirm' onClick={handleSubmitDeleteClick}
                        style={{marginLeft: '5px', marginRight: '5px'}}>
                <DoneIcon style={{fill: theme.palette.success.dark}}/>
            </IconButton>
            <IconButton aria-label='close' onClick={handleCloseClick}
                        style={{marginLeft: '5px', marginRight: '5px'}}>
                <CloseIcon style={{fill: theme.palette.error.dark}}/>
            </IconButton>
        </ButtonGroup>
    )
}

export default DeleteButtonGroup;