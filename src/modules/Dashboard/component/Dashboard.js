import React from "react"
import {Link, Outlet} from "react-router-dom"
import {
    styled,
    Toolbar,
    List,
    Divider,
    IconButton,
    ListItem, ListItemIcon, ListItemText, ListSubheader, Box, Container, Grid, Paper
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 240,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);
const AdminListItems = () => {
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

export const ManagerListItems = () => {
    return (
        <div>
            <ListSubheader inset>Manager panel</ListSubheader>
            <ListItem style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
                      component={Link} to={`movie-management`}>
                <ListItemIcon>
                    <MovieCreationIcon/>
                </ListItemIcon>
                <ListItemText primary="Movie management"/>
            </ListItem>
        </div>
    )
};

const dashBoardTest = () => {
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <div>Chart</div>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <div>Deposits</div>
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <div>Orders</div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export const DrawerComponent = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

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

const Dashboard = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <DrawerComponent/>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    <Outlet/>
                </Container>
            </Box>
        </Box>
    )
}

export default Dashboard;