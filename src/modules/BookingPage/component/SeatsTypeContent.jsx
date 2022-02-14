import React from "react";
import {Box, Button, Divider, Typography} from "@mui/material";
import BookedSeatType from "./BookedSeatType";
import SeatType from "./SeatType";

const SeatsTypeContent = ({theme, session}) => {
    return (
        <Box
            style={{
                margin: '25px 0',
                padding: '10px'
            }}>
            <Box
                style={{
                    marginBottom: '20px'
                }}>
                <Box
                    style={{
                        display: 'inline',
                        textAlign: 'left',
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        Seat types
                    </Typography>
                    <Typography
                        style={{
                            marginTop: '25px',
                            fontSize: '15px',
                            fontWeight: '400',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                        }}>
                        {session?.hall?.name}
                    </Typography>
                </Box>
            </Box>
            <Divider/>
            <Box>
                {
                    session?.sessionSeatTypes?.map((value, index) => (
                        <React.Fragment key={index}>
                            <SeatType theme={theme} value={value}/>
                            <Divider/>
                        </React.Fragment>
                    ))
                }
                <BookedSeatType theme={theme}/>
                <Divider/>
            </Box>
            <Box
                style={{
                    margin: '25px 0'
                }}>
                <Button disabled variant="outlined" fullWidth style={{
                    color: theme.palette.mode === 'dark' ?
                        "rgba(255, 255, 255, 0.35)" :
                        "rgba(0, 0, 0, 0.35)",
                    textTransform: 'none',
                    borderRadius: '22px',
                    border: '2px solid #767577',
                    fontSize: '1em'

                }}>
                    Select seats
                </Button>
            </Box>
        </Box>
    )
}

export default SeatsTypeContent;