import React from "react";
import {Box, Typography} from "@mui/material";
import CheckSessionSeatContainer from "../container/CheckSessionSeatContainer";

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

const HallPlan = ({theme, session, selectedSeats, handleSelectSeat, handleCancelSelectSeat}) => {
    return (
        <Box
            style={{
                textAlign: 'center',
                margin: '25px 0',
                padding: '10px',
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
                                                        <CheckSessionSeatContainer seatId={seat.id} session={session} theme={theme}
                                                                                   selectedSeats={selectedSeats}
                                                                                   handleSelectSeat={handleSelectSeat}
                                                                                   handleCancelSelectSeat={handleCancelSelectSeat}/>
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

export default HallPlan;