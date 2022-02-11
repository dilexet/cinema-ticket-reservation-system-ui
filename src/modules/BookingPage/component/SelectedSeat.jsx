import React from 'react'
import {Box, Grid, IconButton, Typography} from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import ClearIcon from "@mui/icons-material/Clear";
import {SeatSelectedColor} from "../constants/ColorSeatsType";

const SelectedSeat = ({theme, value, handleCancelSelectSeat}) => {
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
                    }}>
                    <SquareRoundedIcon style={{
                        fontSize: '40px',
                        fill: SeatSelectedColor
                    }}/>
                </Box>
            </Grid>
            <Grid item xs={8}
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
                            marginLeft: '20px',
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
            <Grid item xs={2}
                  style={{
                      padding: '0 0 0 10px'
                  }}>
                <Box
                    style={{
                        padding: 0,
                        margin: 0
                    }}>
                    <IconButton onClick={() => handleCancelSelectSeat(value.seat.id)}
                                style={{
                                    color: theme.palette.mode === 'dark' ?
                                        'rgba(255, 255, 255, 0.35)' :
                                        'rgba(0, 0, 0, 0.35)',
                                    padding: '0'
                                }}>
                        <ClearIcon/>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SelectedSeat;