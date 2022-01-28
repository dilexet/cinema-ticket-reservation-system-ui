import {ListItem, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import {Link} from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import React from "react";

export const AdminListItems = () => {
    return (
        <div>
            <ListSubheader inset>Admin panel</ListSubheader>
            <ListItem style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
                      component={Link} to={`user-management`}>
                <ListItemIcon>
                    <ManageAccountsIcon/>
                </ListItemIcon>
                <ListItemText primary="Users management"/>
            </ListItem>
        </div>
    )
};