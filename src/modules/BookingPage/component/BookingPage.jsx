import React from 'react'
import {Box, Button, Container, Divider, Grid, IconButton, Paper, SvgIcon, Typography} from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import MovieHeader from "../../Shared/components/MovieHeader";
import {ColorSeatsType, SeatBookedColor, SeatSelectedColor} from "../constants/ColorSeatsType";
import ContentHeader from "./ContentHeader";
import SeatsTypeContent from "./SeatsTypeContent";

const ConfirmSelectedSeatsContent = ({theme}) => {
    return (
        <Box>
            <Box>

            </Box>
            <Box
                style={{
                    margin: '25px 0'
                }}>
                <Button variant="outlined" fullWidth style={{
                    color: theme.palette.mode === 'dark' ?
                        "rgba(255, 255, 255, 0.35)" :
                        "rgba(0, 0, 0, 0.35)",
                    textTransform: 'none',
                    borderRadius: '22px',
                    border: '2px solid #FFFFFF',
                    fontSize: '1em'

                }}>
                    Confirm
                </Button>
            </Box>
        </Box>
    )
}

const RowNumbers = ({theme, numberRow}) => {
    return (
        <Box
            style={{
                margin: '0 10px'
            }}>
            <Typography
                style={{
                    fontSize: '15px',
                    fontWeight: '400',
                    color: theme.palette.mode === 'dark' ?
                        'rgba(255, 255, 255, 0.35)' :
                        'rgba(0, 0, 0, 0.35)'
                }}>
                {numberRow}
            </Typography>
        </Box>
    )
}

const HallPlan = ({theme, session}) => {
    return (
        <Box
            style={{
                textAlign: 'center',
                margin: '25px 0',
                padding: '10px'
            }}>
            <Box
                style={{
                    verticalAlign: 'top',
                    position: 'relative',
                    maxWidth: '100%'
                }}>
                <Box style={{
                    overflow: 'hidden',
                    position: 'relative',
                    maxWidth: '100%'
                }}>
                    <Box
                        style={{
                            margin: '10px 0 150px',
                        }}>
                        <Box style={{
                            border: theme.palette.mode === 'dark' ?
                                "2px solid rgba(255, 255, 255, 0.8)" :
                                "2px solid rgba(0, 0, 0, 0.8)",
                            maxWidth: '75%',
                            margin: 'auto',
                        }}/>
                        <Typography
                            style={{
                                marginTop: '10px',
                                fontSize: '18px',
                                fontWeight: '700',
                                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                            }}>
                            Screen
                        </Typography>
                    </Box>
                    <Box
                        style={{
                            maxWidth: '75%',
                            margin: 'auto'
                        }}>
                        <Box>
                            {
                                session?.hall?.rows?.map((row, index) => (
                                    <Box key={index} style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '20px 0'
                                    }}>
                                        <RowNumbers theme={theme} numberRow={row?.numberRow}/>
                                        <Box
                                            style={{
                                                margin: '0 10px'
                                            }}>
                                            {
                                                row?.seats?.map((seat, index) => (
                                                    <Box key={index}
                                                         style={{
                                                             display: 'inline-block'
                                                         }}>
                                                        <CheckSessionSeat seatId={seat.id} session={session}/>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                        <RowNumbers theme={theme} numberRow={row?.numberRow}/>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const CheckSessionSeat = ({seatId, session}) => {
    const sessionSeat = session?.sessionSeats?.find(el => el.seat.id === seatId)
    return (
        <Box>
            {
                sessionSeat?.ticketState === "Free" ?
                    <Box style={{
                        margin: '0 2px',
                        cursor: 'pointer',
                    }}>
                        <CropSquareIcon style={{
                            fontSize: '40px',
                            color: ColorSeatsType[sessionSeat?.seat?.seatType],
                        }}/>
                    </Box> :
                    <Box style={{
                        margin: '0 2px',
                    }}>
                        <CropSquareIcon style={{
                            fontSize: '40px',
                            color: SeatBookedColor,
                        }}/>
                    </Box>
            }
        </Box>
    )
}

const BookingPage = ({theme, bookingState, handleClose}) => {
    const [selectedSeats, setSelectedSeats] = React.useState(0);
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
                            <ContentHeader theme={theme} session={bookingState?.sessionState?.session}/>
                            <Divider/>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={8}>
                                <HallPlan theme={theme} session={bookingState?.sessionState?.session}/>
                            </Grid>
                            <Grid item xs={4}>
                                {
                                    selectedSeats === 0 ?
                                        <SeatsTypeContent theme={theme}
                                                          session={bookingState?.sessionState?.session}/> :
                                        <ConfirmSelectedSeatsContent theme={theme}
                                                                     session={bookingState?.sessionState?.session}/>
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