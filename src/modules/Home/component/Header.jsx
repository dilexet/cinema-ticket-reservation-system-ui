import React from 'react'
import {Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Header = ({theme}) => {
    return (
        <Box style={{
            paddingLeft: '30px',
            paddingRight: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1300px',
            width: '100%'
        }}>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                position: 'relative'
            }}>
                <Box style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    flex: '0 1 auto'
                }}>
                    <Typography component='h1' style={{
                        fontSize: '3.125em',
                        fontWeight: '700',
                        margin: '0',
                        opacity: '0.8'
                    }}>
                        Now in cinema
                    </Typography>
                </Box>
                <Box className='scheduleLink' component={Link} to={'/afisha'} style={{
                    color: theme.palette.mode === 'dark' ?
                        'rgba(255, 255, 255, 0.8)' :
                        'rgba(0, 0, 0, 0.8)'
                }}>
                    <Box style={{
                        flex: '0 0 auto',
                        margin: '0 5px'
                    }}>
                        <CalendarTodayIcon style={{
                            fontSize: '25px'
                        }}/>
                    </Box>
                    <Box style={{
                        margin: '0 10px',
                        flex: '1 1 auto',
                    }}>
                        <Typography component='h1' style={{
                            fontSize: '1.125em',
                            fontWeight: '500',
                            alignSelf: 'center'
                        }}>
                            Session schedule
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Header;