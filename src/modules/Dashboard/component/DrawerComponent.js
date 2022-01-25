import React from "react";
import {Drawer} from "../constants/Drawer";
import {Divider, IconButton, List, Toolbar} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {AdminListItems} from "../constants/AdminListItems";
import {ManagerListItems} from "../constants/ManagerListItems";

const DrawerComponent = ({open, toggleDrawer}) => {
    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon/>
                </IconButton>
            </Toolbar>
            <Divider/>
            <List>
                <AdminListItems/>
            </List>
            <Divider/>
            <List>
                <ManagerListItems/>
            </List>
        </Drawer>
    )
}

export default DrawerComponent;