import React from "react";
import moment from "moment";
import {Box, Typography} from "@mui/material";

const SessionCardInfo = ({value, theme}) => {
    return (
        <Box
            style={{
                minHeight: '120px'
            }}
        >
            <Box
                style={{
                    margin: '10px 0 20px'
                }}>
                <Typography
                    style={{
                        fontSize: '1.625em',
                        fontWeight: '400',
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                    }}
                >
                    {moment(value.startDate, "DD/MM/yyyy HH:mm:ss").format("HH:mm")}
                </Typography>
                <Typography
                    style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                    }}
                >
                    {moment(value.startDate, "DD/MM/yyyy HH:mm:ss").format('dddd, MMMM DD')}
                </Typography>
            </Box>
            <Box>
                <Typography
                    style={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
                    }}
                >
                    {value.hall.name}
                </Typography>
            </Box>
        </Box>
    )
}

export default SessionCardInfo;