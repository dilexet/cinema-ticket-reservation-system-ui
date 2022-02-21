import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Box, IconButton, Typography} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Timer from "../../BookingPage/component/Timer";

const MovieHeader = ({movieName, theme, handleClose, minutes, seconds, isRunning}) => {
    return (
        <Box
            style={{
                position: 'sticky', top: '0px',
                zIndex: '100',
                boxShadow: 'none',
            }}>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 30px',
                    margin: '0 auto 15px',
                    maxWidth: '1300px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    background: theme.palette.mode === 'dark' ?
                        'rgba(39, 39, 42, 0.9)' :
                        'rgba(211, 211, 208, 0.9)'
                }}>
                <Box style={{boxSizing: 'border-box'}}>
                    <IconButton aria-label="Back" onClick={handleClose}
                                style={{
                                    display: 'inline-block', verticalAlign: 'top',
                                    color: theme.palette.mode === 'dark' ?
                                        'rgba(255, 255, 255, 0.35)' :
                                        'rgba(0, 0, 0, 0.35)'
                                }}>
                        <KeyboardBackspaceIcon/>
                    </IconButton>
                </Box>
                <Box
                    style={{
                        padding: '0 15px', margin: '0 auto', flex: '1 1 auto'
                    }}
                >
                    <Typography style={{
                        textAlign: 'center',
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
                        fontWeight: '700',
                        fontSize: '1.125em'
                    }}>
                        {movieName}
                    </Typography>
                    {
                        isRunning ?
                            <Box>
                                <Timer minutes={minutes} seconds={seconds}/>
                            </Box> : <></>
                    }
                </Box>
                <Box style={{boxSizing: 'border-box'}}>
                    <IconButton aria-label="Back" onClick={handleClose}
                                style={{
                                    display: 'inline-block',
                                    verticalAlign: 'top',
                                    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
                                }}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default MovieHeader;