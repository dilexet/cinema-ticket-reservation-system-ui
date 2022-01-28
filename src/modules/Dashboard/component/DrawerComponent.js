import React from "react";
import {Drawer} from "../constants/Drawer";
import {Divider, IconButton, List, Toolbar} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {AdminListItems} from "../constants/AdminListItems";
import {ManagerListItems} from "../constants/ManagerListItems";
import {AdminRole, ManagerRole} from "../../Shared/constants/RoleNames";

const DrawerComponent = ({open, toggleDrawer, role}) => {
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
            {
                role === AdminRole ?
                    <List>
                        <AdminListItems/>
                    </List> :
                    role === ManagerRole ?
                        <List>
                            <ManagerListItems/>
                        </List> : <></>
            }
        </Drawer>
    )
}

export default DrawerComponent;