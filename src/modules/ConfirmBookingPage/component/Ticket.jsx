import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import {SeatSelectedColor} from "../../BookingPage/constants/ColorSeatsType";

const Ticket = ({theme, value}) => {
    return (
        <Grid container spacing={1}
              style={{
                  margin: '20px 0'
              }}>
            <Grid item xs={2}>
                <Box
                    style={{
                        width: '85px',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '20px'
                    }}>
                    <SquareRoundedIcon style={{
                        fontSize: '40px',
                        fill: SeatSelectedColor
                    }}/>
                </Box>
            </Grid>
            <Grid item xs={10}
                  style={{
                      padding: '0 10px'
                  }}>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <Box>
                        <Typography
                            style={{
                                fontSize: '1em',
                                fontWeight: '400',
                                color: theme.palette.mode === 'dark' ?
                                    'rgba(255, 255, 255, 0.8)' :
                                    'rgba(0, 0, 0, 0.8)'
                            }}>
                            {value?.seat?.numberRow}
                            &nbsp;row&nbsp;/&nbsp;
                            {value?.seat?.numberSeat}
                            &nbsp;seat
                        </Typography>
                    </Box>
                    <Box
                        style={{
                            margin: '0 20px',
                        }}>
                        <Typography
                            style={{
                                fontSize: '1em',
                                fontWeight: '700',
                                color: theme.palette.mode === 'dark' ?
                                    'rgba(255, 255, 255, 0.8)' :
                                    'rgba(0, 0, 0, 0.8)'
                            }}>
                            {value?.sessionSeatType?.price}
                            &nbsp;$
                        </Typography>
                    </Box>
                </Box>
                <Box
                    style={{
                        margin: '5px 0'
                    }}>
                    <Typography
                        style={{
                            fontSize: '1em',
                            fontWeight: '400',
                            color: theme.palette.mode === 'dark' ?
                                'rgba(200, 199, 199, 0.8)' :
                                'rgba(50, 51, 51, 0.8)'
                        }}>
                        Seat type:&nbsp;
                        {value?.sessionSeatType?.seatType}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Ticket;