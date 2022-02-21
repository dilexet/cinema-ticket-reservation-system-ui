import React from 'react'
import {Container, Divider, Grid, Paper} from "@mui/material";
import MovieHeader from "../../Shared/components/MovieHeader";
import ContentHeader from "./ContentHeader";
import SeatsTypeContent from "./SeatsTypeContent";
import SelectedSeatsContentContainer from "../container/SelectedSeatsContentContainer";
import HallPlan from "./HallPlan";

const BookingPage = ({
                         theme, bookingState, handleClose, selectedSeats,
                         handleCancelSelectSeat, handleSelectSeat,
                         minutes, seconds, isRunning
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
                    <MovieHeader theme={theme}
                                 movieName={bookingState?.sessionState?.session?.movie?.name}
                                 handleClose={handleClose} minutes={minutes} seconds={seconds} isRunning={isRunning}/>
                    <Divider/>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <ContentHeader theme={theme} session={bookingState?.sessionState?.session}/>
                            <Divider/>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={8}>
                                <HallPlan theme={theme} session={bookingState?.sessionState?.session}
                                                   selectedSeats={selectedSeats} handleSelectSeat={handleSelectSeat}
                                                   handleCancelSelectSeat={handleCancelSelectSeat}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                {
                                    selectedSeats.length < 1 ?
                                        <SeatsTypeContent theme={theme}
                                                          session={bookingState?.sessionState?.session}/> :
                                        <SelectedSeatsContentContainer theme={theme} selectedSeats={selectedSeats}
                                                                       handleCancelSelectSeat={handleCancelSelectSeat}
                                                                       session={bookingState?.sessionState?.session}
                                        />
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    )
}

export default BookingPage;