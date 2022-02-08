import React from "react";
import {Link} from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import SessionCardInfo from "./SessionCardInfo";
import HallWorkload from "./HallWorkload";

const SessionCard = ({session, theme}) => {
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={4}
                      style={{
                          maxWidth: '220px'
                      }}>
                    <Box>
                        <Typography style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                        }}>
                            {session?.cinema?.name}
                        </Typography>
                        <Box style={{margin: '10px 0'}}>
                            <Typography component='span' style={{
                                fontSize: '1em',
                                fontWeight: '400',
                                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
                            }}>
                                {session?.cinema?.cityName}
                                ,&nbsp;
                                {session?.cinema?.street}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={8} style={{paddingLeft: '40px'}}>
                    {
                        session?.sessions?.map((value, index) => (
                            <Grid item xs={3} key={index} component={Link}
                                  to={`/afisha/movieId=${value.movie.id}/sessionId=${value.id}`}
                                  style={{
                                      margin: "5px",
                                      padding: "20px"
                                  }}
                                  className='sessionCard'>
                                <SessionCardInfo theme={theme} value={value}/>
                                <HallWorkload value={value}/>
                            </Grid>

                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default SessionCard;