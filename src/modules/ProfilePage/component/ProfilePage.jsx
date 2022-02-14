import React from 'react'
import {TabContext, TabPanel} from "@mui/lab";
import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Tab, Tabs,
    Typography
} from "@mui/material";
import UserProfileContainer from "../container/UserProfileContainer";
import TicketsList from "./TicketsList";


const ProfilePage = ({
                         theme,
                         tabsValue,
                         handleChange,
                         userProfileState,
                         showPastTickets,
                         handleChangeShowPastTickets
                     }) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} style={{minHeight: '1000px'}}>
            <Grid item>
                <Paper sx={{p: 2}} style={{
                    minWidth: '1240px',
                    background: theme.palette.mode === 'dark' ? "#27272A" : "#FFFFFF",
                    border: "none",
                    boxShadow: 'none'
                }}>
                    <TabContext value={tabsValue}>
                        <Box style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            padding: '0 30px'
                        }}>
                            {
                                tabsValue === 'tickets' ?
                                    <Typography component='h1' style={{
                                        fontSize: '3.125em',
                                        fontWeight: '700',
                                        margin: '0'
                                    }}>
                                        Ticket purchase history
                                    </Typography> :
                                    <Typography component='h1' style={{
                                        fontSize: '3.125em',
                                        fontWeight: '700',
                                        margin: '0'
                                    }}>
                                        Profile settings
                                    </Typography>
                            }
                            <Box style={{
                                flex: '0 0 auto'
                            }}>
                                <Tabs
                                    value={tabsValue}
                                    onChange={handleChange}
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    aria-label="secondary tabs example">
                                    <Tab value="tickets" label='Tickets'/>
                                    <Tab value="profile" label='Profile'/>
                                </Tabs>
                            </Box>
                        </Box>
                        <Box style={{
                            margin: '0 auto 90px auto',
                            padding: '30px'
                        }}>
                            <Divider/>
                            <Box>
                                <TabPanel value="tickets">
                                    <TicketsList theme={theme} tickets={userProfileState?.data?.userProfile?.tickets}
                                                 showPastTickets={showPastTickets}
                                                 handleChangeShowPastTickets={handleChangeShowPastTickets}/>
                                </TabPanel>
                                <TabPanel value="profile">
                                    <UserProfileContainer/>
                                </TabPanel>
                            </Box>
                        </Box>
                    </TabContext>
                </Paper>
            </Grid>
        </Container>
    )
}

export default ProfilePage;