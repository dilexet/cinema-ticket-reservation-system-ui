import React from "react";
import {Box, Typography} from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import {SeatBookedColor} from "../constants/ColorSeatsType";

const BookedSeatType = ({theme}) => {
    return (
        <Box
            style={{
                display: 'flex',
                margin: '15px'
            }}>
            <Box
                style={{
                    flex: '0 0 auto',
                    width: '85px',
                    textAlign: 'center',
                    paddingRight: '20px'
                }}>
                <CropSquareIcon style={{
                    fontSize: '40px',
                    color: SeatBookedColor
                }}/>
            </Box>
            <Box
                style={{
                    flex: '1 1 auto',
                    margin: 'auto'
                }}>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
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
                            Seat booked
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BookedSeatType;