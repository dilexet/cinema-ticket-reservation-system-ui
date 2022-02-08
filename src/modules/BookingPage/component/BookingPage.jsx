import React from 'react'
import {Box, CardMedia, Container, Divider, Grid, Paper, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MovieHeader from "../../Shared/components/MovieHeader";

const BookingPage = ({theme, bookingState, handleClose}) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} style={{minHeight: '1000px'}}>
            <Grid item>
                <Paper sx={{p: 2}} style={{
                    minWidth: '1240px',
                    background: theme.palette.mode === 'dark' ? "#27272A" : "#FFFFFF",
                    border: "none",
                    boxShadow: 'none'
                }}>
                    <MovieHeader theme={theme}
                                 movieName={bookingState?.sessionState?.session?.movie?.name}
                                 handleClose={handleClose}/>
                    <Divider/>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Box
                                style={{
                                    padding: '20px 0',
                                    display: 'flex'
                                }}>
                                <Box
                                    style={{
                                        flex: '0 0 auto',
                                        margin: '10px 20px 10px 0'
                                    }}>
                                    <CardMedia
                                        component='img'
                                        style={{
                                            width: '55px', height: '80px',
                                            borderRadius: '5px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            opacity: '0.9',
                                        }}
                                        image={bookingState?.sessionState?.session?.movie?.posterUrl}
                                        alt={bookingState?.sessionState?.session?.movie?.name}
                                    />
                                </Box>
                                <Box
                                    style={{
                                        flex: '1 1 auto',
                                        marginLeft: '20px'
                                    }}>
                                    <Typography
                                        style={{
                                            fontSize: '2.25em',
                                            fontWeight: '700',
                                            lineHeight: '34px',
                                            marginBottom: '6px',
                                            opacity: '0.8'
                                        }}>
                                        {bookingState?.sessionState?.session?.movie?.name}
                                    </Typography>
                                    <Box
                                        style={{
                                            display: 'inline-block',
                                            verticalAlign: 'top',
                                        }}>
                                        <Box
                                            style={{
                                                margin: '10px 0',
                                                display: 'inline-flex',
                                                verticalAlign: 'top',
                                                alignItems: 'center',
                                            }}>
                                            <Box
                                                style={{
                                                    display: 'flex',
                                                    paddingRight: '12px'
                                                }}>
                                                <LocationOnIcon sx={{fontSize: 26}} style={{
                                                    color: theme.palette.mode === 'dark' ?
                                                        'rgba(255, 255, 255, 0.35)' :
                                                        'rgba(0, 0, 0, 0.35)'
                                                }}/>
                                            </Box>
                                            <Box>
                                                <Typography
                                                    style={{
                                                        fontSize: '17px',
                                                        fontWeight: 'bold',
                                                        color: theme.palette.mode === 'dark' ?
                                                            'rgba(255, 255, 255, 0.8)' :
                                                            'rgba(0, 0, 0, 0.8)'
                                                    }}>
                                                    <span>
                                                         {bookingState?.sessionState?.session?.hall?.cinemaName}
                                                        &nbsp;in&nbsp;
                                                        {bookingState?.sessionState?.session?.hall?.cityName}
                                                        ,&nbsp;
                                                        {bookingState?.sessionState?.session?.hall?.street}
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: theme.palette.mode === 'dark' ?
                                                                'rgba(255, 255, 255, 0.35)' :
                                                                'rgba(0, 0, 0, 0.35)'
                                                        }}>
                                                        &nbsp;/&nbsp;
                                                    </span>
                                                    <span>
                                                        {bookingState?.sessionState?.session?.hall?.name}
                                                    </span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <CalendarTodayIcon label='8'/>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider/>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={8}>
                                Left content
                            </Grid>
                            <Grid item xs={4}>
                                Right content
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    )
}

export default BookingPage;