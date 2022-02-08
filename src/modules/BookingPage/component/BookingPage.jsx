import React from 'react'
import {Box, Container, Divider, Grid, Paper} from "@mui/material";
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
                    <Box
                        style={{
                            display: 'flex', margin: '60px 0',
                        }}>
                        <Box style={{
                            flex: '1 1 auto', boxSizing: 'border-box',

                        }}>
                            <Box
                                style={{
                                    display: 'flex',
                                    marginBottom: '40px',
                                }}
                            >
                                <Box
                                    style={{
                                        flex: '0 0 auto',
                                        width: '190px'
                                    }}>
                                    Left content
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            style={{
                                flex: '0 0 auto',
                                width: '30%',
                                maxWidth: '30%',
                                minWidth: '300px',
                                paddingLeft: '70px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Box>
                                Right content
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Container>
    )
}

export default BookingPage;