import React from "react";
import {Box, Typography} from "@mui/material";

const MovieSessionPageRightContent = ({movie, theme}) => {
    return (
        <Box
            style={{
                flex: '0 0 auto',
                width: '30%',
                maxWidth: '30%',
                minWidth: '300px',
                paddingLeft: '70px',
                boxSizing: 'border-box'
            }}
        >
            <Box>
                <Typography style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                }}>
                    {movie?.name}
                </Typography>
            </Box>
            <Box style={{margin: '10px 0'}}>
                <Typography style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                }}>
                    {movie?.movieDescription?.description}
                </Typography>
            </Box>
        </Box>
    )
}

export default MovieSessionPageRightContent;