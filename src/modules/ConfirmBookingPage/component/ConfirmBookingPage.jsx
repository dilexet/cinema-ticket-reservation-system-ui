import React from 'react'
import {Container, Divider, Grid, Paper} from "@mui/material";
import MovieHeader from "../../Shared/components/MovieHeader";
import ContentHeader from "../../BookingPage/component/ContentHeader";
import OrdersList from "./OrdersList";
import TotalPayableContent from "./TotalPayableContent";

const ConfirmBookingPage = ({
                                theme, handleConfirmOrder, handleClose, bookingState, totalPrice,
                                selectedAdditionalServices, selectedSeats, minutes, seconds, isRunning
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
                                <OrdersList theme={theme} selectedAdditionalServices={selectedAdditionalServices}
                                            selectedSeats={selectedSeats}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TotalPayableContent theme={theme} totalPrice={totalPrice}
                                                     handleConfirmOrder={handleConfirmOrder}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    )
}

export default ConfirmBookingPage;