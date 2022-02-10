import React from "react";
import {Box, Fade, Tooltip, styled, Typography} from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import {ColorSeatsType, SeatBookedColor, SeatSelectedColor} from "../constants/ColorSeatsType";

const ToolTipSeatMenu = ({theme, sessionSeat}) => {
    return (
        <Box style={{
            borderRadius: '5px',
            padding: '5px',
            width: '190px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '0 0 auto',
                width: '72px',
                minHeight: '90px',
                marginRight: '5px',
                borderRadius: '3px',
                border: theme.palette.mode === 'dark' ?
                    '1px solid rgba(255, 255, 255, 0.3)' :
                    '1px solid rgba(0, 0, 0, 0.3)'
            }}>
                <Box style={{
                    padding: '2px'
                }}>
                    <Typography style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: theme.palette.mode === 'dark' ?
                            'rgba(255, 255, 255, 0.8)' :
                            'rgba(0, 0, 0, 0.8)'
                    }}>
                        {sessionSeat?.seat?.numberRow}
                        &nbsp;
                        row
                    </Typography>
                </Box>
                <Box style={{
                    padding: '2px'
                }}>
                    <Typography style={{
                        fontSize: '30px',
                        lineHeight: '36px',
                        fontWeight: '700',
                        color: theme.palette.mode === 'dark' ?
                            'rgba(255, 255, 255, 0.8)' :
                            'rgba(0, 0, 0, 0.8)'
                    }}>
                        {sessionSeat?.seat?.numberSeat}
                    </Typography>
                </Box>
                <Box style={{
                    padding: '2px'
                }}>
                    <Typography style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: theme.palette.mode === 'dark' ?
                            'rgba(255, 255, 255, 0.8)' :
                            'rgba(0, 0, 0, 0.8)'
                    }}>
                        seat
                    </Typography>
                </Box>
            </Box>
            <Box style={{
                flex: '1 1 auto'
            }}>
                <Box>
                    <Typography style={{
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: theme.palette.mode === 'dark' ?
                            'rgba(255, 255, 255, 0.8)' :
                            'rgba(0, 0, 0, 0.8)'
                    }}>
                        {sessionSeat?.sessionSeatType?.seatType}
                    </Typography>
                </Box>
                <Box>
                    <Typography style={{
                        fontSize: '14px',
                        lineHeight: '24px',
                        fontWeight: '700',
                        marginTop: '8px',
                        color: theme.palette.mode === 'dark' ?
                            'rgba(255, 255, 255, 0.8)' :
                            'rgba(0, 0, 0, 0.8)'
                    }}>
                        {sessionSeat?.sessionSeatType?.price}
                        &nbsp;$
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const CheckSessionSeat = ({theme, seatId, handleSelectSeat, handleCancelSelectSeat, sessionSeat, seatIsBooked}) => {
    return (
        <Box>
            {
                sessionSeat?.ticketState === "Free" ?
                    <Tooltip TransitionComponent={Fade} arrow placement="top"
                             TransitionProps={{timeout: 400}}
                             title={<ToolTipSeatMenu theme={theme} sessionSeat={sessionSeat}/>}
                             componentsProps={{
                                 tooltip: {
                                     sx: {
                                         backgroundColor: theme.palette.mode === 'dark' ?
                                             'rgba(0, 0, 0, 0.9)' :
                                             'rgba(255, 255, 255, 0.9)',
                                     }
                                 },
                                 arrow: {
                                     sx: {
                                         color: theme.palette.mode === 'dark' ?
                                             'rgba(0, 0, 0, 0.9)' :
                                             'rgba(255, 255, 255, 0.9)',
                                     }
                                 }
                             }}>
                        <Box onClick={() => handleSelectSeat(seatId)}
                             style={{
                                 margin: '0 2px',
                                 cursor: 'pointer',
                             }}>
                            <CropSquareIcon style={{
                                fontSize: '40px',
                                color: ColorSeatsType[sessionSeat?.seat?.seatType],
                            }}/>
                        </Box>
                    </Tooltip>
                    :
                    seatIsBooked ?
                        <Box onClick={() => handleCancelSelectSeat(seatId)}
                             style={{
                                 margin: '0 2px',
                                 cursor: 'pointer',
                             }}>
                            <SquareRoundedIcon style={{
                                fontSize: '40px',
                                fill: SeatSelectedColor,
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

export default CheckSessionSeat;