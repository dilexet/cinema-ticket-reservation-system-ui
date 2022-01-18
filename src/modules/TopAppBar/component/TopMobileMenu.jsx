import {Menu, MenuItem} from "@mui/material";
import React from 'react';
import LinkMaterial from "@mui/material/Link";
import Divider from "@mui/material/Divider/Divider";
import AccountMenu from "./AccountMenu";

const TopMobileMenu = ({
                           mobileMenuId,
                           mobileMoreAnchorEl,
                           isMobileMenuOpen,
                           handleMobileMenuClose,
                           isAuthenticate
                       }) => {
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top', horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top', horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            style={{alignItems: "center"}}
        >
            <MenuItem>
                <LinkMaterial
                    style={{textDecoration: 'none', textTransform: "capitalize"}}
                    variant="button"
                    color="text.primary"
                    href="#"
                    sx={{my: 1, mx: 2.5}}
                >
                    Features
                </LinkMaterial>
            </MenuItem>
            <MenuItem>
                <LinkMaterial
                    style={{textDecoration: 'none', textTransform: "capitalize"}}
                    variant="button"
                    color="text.primary"
                    href="#"
                    sx={{my: 1, mx: 2.5}}
                >
                    Enterprise
                </LinkMaterial>
            </MenuItem>
            <MenuItem>
                <LinkMaterial
                    style={{textDecoration: 'none', textTransform: "capitalize"}}
                    variant="button"
                    color="text.primary"
                    href="#"
                    sx={{my: 1, mx: 2.5}}
                >
                    Support
                </LinkMaterial>
            </MenuItem>

            <Divider/>

            <AccountMenu isAuthenticate={isAuthenticate}/>
        </Menu>)
};

export default TopMobileMenu;