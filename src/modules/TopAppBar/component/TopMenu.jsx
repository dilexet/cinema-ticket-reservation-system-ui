import React from 'react';
import {Menu} from "@mui/material";
import AccountMenu from "./AccountMenu";

const TopMenu = ({menuId, anchorEl, isMenuOpen, handleMenuClose, isAuthenticate}) => {
    return (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            transformOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            open={isMenuOpen}
            onClick={handleMenuClose}
            onClose={handleMenuClose}
        >
            <AccountMenu isAuthenticate={isAuthenticate}/>
        </Menu>
    )
};

export default TopMenu;