import React from "react";
import {Box, CardMedia, Typography} from "@mui/material";

const MovieSessionPageLeftContent = ({movie, theme}) => {
    return (
        <Box
            style={{
                display: 'flex',
                marginBottom: '40px',
            }}
        >
            <Box
                style={{
                    flex: '0 0 auto',
                    width: '190px'
                }}>
                <CardMedia
                    component='img'
                    style={{
                        width: '120px', height: '180px',
                        borderRadius: '12px',
                        position: 'relative',
                        overflow: 'hidden',
                        opacity: '0.9', display: 'block',
                    }}
                    image={movie?.posterUrl}
                    alt={movie?.name}
                />
            </Box>
            <Box style={{
                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
            }}>
                <Typography style={{
                    fontSize: '40px',
                    fontWeight: '700',
                }}>
                    {movie?.name}
                </Typography>
                <Box
                    style={{
                        margin: '15px 0',
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
                    }}>
                    <Typography style={{
                        fontSize: '1em',
                        fontWeight: '400',
                    }}>
                        {movie?.movieDescription?.genres.join(', ')}
                        &nbsp;/&nbsp;
                        {movie?.movieDescription?.countries.join(', ')}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default MovieSessionPageLeftContent;