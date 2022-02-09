import React from "react";
import moment from "moment";
import {Box, CardMedia, Typography} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ContentHeader = ({theme, session}) => {
    return (
        <Box
            style={{
                padding: '20px 0', display: 'flex'
            }}>
            <Box
                style={{
                    flex: '0 0 auto', margin: '10px 20px 10px 0'
                }}>
                <CardMedia
                    component='img'
                    style={{
                        width: '55px',
                        height: '80px',
                        borderRadius: '5px',
                        position: 'relative',
                        overflow: 'hidden',
                        opacity: '0.9',
                    }}
                    image={session?.movie?.posterUrl}
                    alt={session?.movie?.name}
                />
            </Box>
            <Box
                style={{
                    flex: '1 1 auto', marginLeft: '20px'
                }}>
                <Typography
                    style={{
                        fontSize: '2.25em', fontWeight: '700', lineHeight: '34px', marginBottom: '6px', opacity: '0.8'
                    }}>
                    {session?.movie?.name}
                </Typography>
                <Box
                    style={{
                        display: 'inline-block', verticalAlign: 'top',
                    }}>
                    <Box
                        style={{
                            margin: '10px 0', display: 'inline-flex', verticalAlign: 'top', alignItems: 'center',
                        }}>
                        <Box
                            style={{
                                display: 'flex', paddingRight: '12px'
                            }}>
                            <LocationOnIcon sx={{fontSize: 26}} style={{
                                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)'
                            }}/>
                        </Box>
                        <Box>
                            <Typography
                                style={{
                                    fontSize: '17px',
                                    fontWeight: 'bold',
                                    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                                }}>
                                <span>
                                    {session?.hall?.cinemaName}
                                    &nbsp;in&nbsp;
                                    {session?.hall?.cityName}
                                    ,&nbsp;
                                    {session?.hall?.street}
                                </span>
                                <span
                                    style={{
                                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)'
                                    }}>
                                    &nbsp;/&nbsp;
                                </span>
                                <span>
                                    {session?.hall?.name}
                                </span>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        style={{
                            margin: '10px 50px', display: 'inline-flex', verticalAlign: 'top', alignItems: 'center',
                        }}>
                        <Box
                            style={{
                                display: 'flex'
                            }}>
                            <CalendarTodayIcon style={{
                                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
                                fontSize: '26px'
                            }}/>
                        </Box>
                        <Box
                            style={{
                                margin: '0 15px'
                            }}>
                            <Typography
                                style={{
                                    fontSize: '1em',
                                    fontWeight: '400',
                                    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                                }}>
                                <span>
                                    {moment(session?.startDate, "DD/MM/yyyy HH:mm:ss").format('dddd, MMMM DD')}
                                </span>
                                <span>
                                    &nbsp;/&nbsp;
                                </span>
                                <span>
                                    {moment(session?.startDate, "DD/MM/yyyy HH:mm:ss").format('HH:mm')}
                                </span>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContentHeader;