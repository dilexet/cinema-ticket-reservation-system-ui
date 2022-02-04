import React from 'react'
import {IconButton} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const OpenMenuButton = ({openMenu, setOpenMenu, handleCloseMenu}) => {
    return (
        <IconButton
            style={{
                borderRadius: '100px',
                color: 'rgba(212, 7, 84)',
                border: '2px solid rgba(212, 7, 84)',
                width: '22px',
                height: '22px',
                display: 'flex',
                textAlign: 'right',
                float: 'right',
            }}
            onClick={() => {
                if (openMenu === false) {
                    handleCloseMenu()
                }
                setOpenMenu(!openMenu)
            }}
        >
            {openMenu ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </IconButton>
    )
}

export default OpenMenuButton;