import React from 'react'
import {
    Card, CardMedia, CardContent,
    Typography, CardActions, Button, Box,
} from '@mui/material';
import {Link} from "react-router-dom";

const MovieCard = ({movie, theme}) => {
    return (
        <Card
            sx={{maxWidth: 296, paddingLeft: '20px', paddingRight: '20px', boxShadow: 'none'}}
            style={{
                backgroundImage: 'none',
                background: 'none'
            }}>
            <CardMedia
                component='img'
                style={{
                    width: '240px', height: '360px',
                    borderRadius: '22px',
                    opacity: '0.9', display: 'block',
                }}
                image={movie?.posterUrl}
                alt={movie.name}
            />
            <CardContent
                style={{
                    margin: '24px 0'
                }}
            >
                <Box>
                    <Typography variant="body2"
                                style={{
                                    color: theme.palette.mode === 'dark'
                                        ? "rgba(255, 255, 255, 0.35)"
                                        : "rgba(0, 0, 0, 0.35)",
                                    fontSize: '1em',
                                    fontWeight: '500',
                                }}>
                        {movie.movieDescription.countries.join(', ')}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2"
                                style={{
                                    color: theme.palette.mode === 'dark'
                                        ? "rgba(255, 255, 255, 0.9)"
                                        : "rgba(0, 0, 0, 0.9)",
                                    fontSize: '1.375em',
                                    fontWeight: '700',
                                    marginTop: '10px'
                                }}>
                        {movie.name}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2"
                                style={{
                                    color: theme.palette.mode === 'dark'
                                        ? "rgba(255, 255, 255, 0.35)"
                                        : "rgba(0, 0, 0, 0.35)",
                                    fontSize: '1em',
                                    fontWeight: '500',
                                    marginTop: '30px'
                                }}>
                        {movie.movieDescription.genres.join(', ')}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions
                style={{
                    margin: '10px 0'
                }}>
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: '22px',
                        border: '2px solid #D40754',
                        color: 'inherit',
                        textDecoration: "none",
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    component={Link}
                    to='/'
                >
                    Buy ticket
                </Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard;