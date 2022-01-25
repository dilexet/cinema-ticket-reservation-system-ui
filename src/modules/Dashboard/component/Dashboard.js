import React from "react"
import {Outlet} from "react-router-dom"
import {Box, Container} from '@mui/material';
import DrawerContainer from "../container/DrawerContainer";

const Dashboard = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <DrawerContainer/>
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