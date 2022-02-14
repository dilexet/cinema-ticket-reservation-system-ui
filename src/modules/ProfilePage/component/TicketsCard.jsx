import React from "react";
import {Box, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import moment from "moment";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollapsibleReservedSessionSeats from "./CollapsibleReservedSessionSeats";
import CollapsibleSelectedAdditionalServices from "./CollapsibleSelectedAdditionalServices";

const TicketsCard = ({theme, ticket, open, setOpen}) => {
    return (
        <Box style={{
            display: 'flex', margin: '30px 10px', width: '100%',
        }}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <CardMedia
                        component='img'
                        style={{
                            width: '80px', height: '120px',
                            borderRadius: '5px', opacity: '0.9',
                            display: 'block',
                        }}
                        image={ticket?.session?.movie?.posterUrl}
                        alt={ticket?.session?.movie?.name}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box style={{
                        margin: '0 10px'
                    }}>
                        <Typography
                            style={{
                                fontSize: '1em', fontWeight: '700',
                                marginBottom: '6px', opacity: '0.8'
                            }}>
                            {ticket?.session?.movie?.name}
                        </Typography>
                        <Box
                            style={{
                                display: 'inline-block', verticalAlign: 'top',
                            }}>
                            <Box
                                style={{
                                    margin: '10px 0',
                                    display: 'inline-flex',
                                    verticalAlign: 'top',
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                <Box
                                    style={{
                                        display: 'flex', paddingRight: '12px'
                                    }}>
                                    <LocationOnIcon style={{
                                        fontSize: '20px',
                                        color: theme.palette.mode === 'dark' ?
                                            'rgba(255, 255, 255, 0.35)' :
                                            'rgba(0, 0, 0, 0.35)'
                                    }}/>
                                </Box>
                                <Box>
                                    <Typography style={{
                                        color: theme.palette.mode === 'dark' ?
                                            'rgba(255, 255, 255, 0.7)' :
                                            'rgba(0, 0, 0, 0.7)'
                                    }}>
                                        <Typography component='span' fontSize='14px' fontWeight='400'>
                                            {ticket?.session?.hall?.cinemaName}
                                            &nbsp;in&nbsp;
                                            {ticket?.session?.hall?.cityName}
                                            ,&nbsp;
                                            {ticket?.session?.hall?.street}
                                        </Typography>
                                        <Typography component='span' fontSize='14px' fontWeight='400'
                                                    style={{
                                                        color: theme.palette.mode === 'dark' ?
                                                            'rgba(255, 255, 255, 0.35)' :
                                                            'rgba(0, 0, 0, 0.35)'
                                                    }}>
                                            &nbsp;/&nbsp;
                                        </Typography>
                                        <Typography component='span' fontSize='14px' fontWeight='400'>
                                            {ticket?.session?.hall?.name}
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                style={{
                                    margin: '10px 0',
                                    display: 'inline-flex',
                                    verticalAlign: 'top',
                                    alignItems: 'center',
                                }}>
                                <Box
                                    style={{
                                        display: 'flex'
                                    }}>
                                    <CalendarTodayIcon style={{
                                        color: theme.palette.mode === 'dark' ?
                                            'rgba(255, 255, 255, 0.35)' :
                                            'rgba(0, 0, 0, 0.35)',
                                        fontSize: '22px',
                                    }}/>
                                </Box>
                                <Box
                                    style={{
                                        margin: '0 15px'
                                    }}>
                                    <Typography style={{
                                        color: theme.palette.mode === 'dark' ?
                                            'rgba(255, 255, 255, 0.8)' :
                                            'rgba(0, 0, 0, 0.8)'
                                    }}>
                                        <Typography component='span' fontSize='14px' fontWeight='400'>
                                            {moment(ticket?.session?.startDate,
                                                "DD/MM/yyyy HH:mm:ss").format('dddd, MMMM DD')}
                                        </Typography>
                                        <Typography component='span' fontSize='14px' fontWeight='400'>
                                            &nbsp;/&nbsp;
                                        </Typography>
                                        <Typography component='span' fontSize='14px' fontWeight='400'>
                                            {moment(ticket?.session?.startDate,
                                                "DD/MM/yyyy HH:mm:ss").format('HH:mm')}
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{
                        height: '100%',
                        marginRight: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography style={{
                            color: theme.palette.mode === 'dark' ?
                                'rgba(255, 255, 255, 0.8)' :
                                'rgba(0, 0, 0, 0.8)'
                        }}>
                            <Typography component='span' fontSize='20px' fontWeight='500'>
                                Total price:&nbsp;
                            </Typography>
                            <Typography component='span' fontSize='20px' fontWeight='700'>
                                {ticket?.totalPrice}
                            </Typography>
                            <Typography component='span' fontSize='20px' fontWeight='600'>
                                &nbsp;$
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box style={{
                        height: '100%',
                        marginRight: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <IconButton
                                size="small"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={8}>
                        <CollapsibleReservedSessionSeats open={open}
                                                         reservedSeats={ticket?.reservedSessionSeats}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CollapsibleSelectedAdditionalServices open={open}
                                                               selectedServices={ticket?.selectedSessionAdditionalServices}/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TicketsCard