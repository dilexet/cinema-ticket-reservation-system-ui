import React from "react";
import {Box, Typography} from "@mui/material";
import SessionCard from "./SessionCard";

const SessionsList = ({sessionState, theme}) => {
    return (
        <Box>
            {
                sessionState?.dataList?.sessions?.length !== 0 ?
                    sessionState?.dataList?.sessions.map((value, index) => (
                        <Box key={index} style={{
                            display: 'flex',
                            padding: '35px 0',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                            borderTop: theme.palette.mode === 'dark' ?
                                '5px solid rgba(255, 255, 255, 0.15)' :
                                '5px solid rgba(0, 0, 0, 0.15)',
                        }}>
                            <SessionCard session={value} theme={theme}/>
                        </Box>
                    )) :
                    <Box>
                        <Typography style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                        }}>
                            Not sessions found
                        </Typography>
                    </Box>
            }
        </Box>
    )
}

export default SessionsList;