import React from 'react';
import {Link} from "react-router-dom";
import {ListItemIcon, MenuItem} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";

const AccountMenu = ({isAuthenticate}) => {
    if (isAuthenticate === true) {
        return (
            <div>
                <MenuItem color='inherit' variant="body2" style={{textDecoration: 'none'}}
                          component={Link} to='/profile'>
                    <ListItemIcon>
                        <PersonIcon fontSize="small"/>
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem color='inherit' variant="body2" style={{textDecoration: 'none'}}
                          component={Link} to='/logout'>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </div>
        )
    } else {
        return (
            <div>
                <MenuItem color='inherit' variant="body2" style={{textDecoration: 'none'}}
                          component={Link} to='/login'>
                    <ListItemIcon>
                        <LoginIcon fontSize="small"/>
                    </ListItemIcon>
                    Sign in
                </MenuItem>
                <MenuItem color='inherit' variant="body2" style={{textDecoration: 'none'}}
                          component={Link} to='/register'>
                    <ListItemIcon>
                        <PersonAdd fontSize="small"/>
                    </ListItemIcon>
                    Sign up
                </MenuItem>
            </div>
        )
    }

};

export default AccountMenu;