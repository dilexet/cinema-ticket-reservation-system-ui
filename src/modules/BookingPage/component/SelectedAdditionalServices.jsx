import React from 'react'
import {Box, Grid, IconButton, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SelectedAdditionalServices = ({theme, value, selectedAddServices, handleAdd, handleRemove}) => {
    return (
        <Grid container spacing={1}
              style={{
                  margin: '20px 0'
              }}>
            <Grid item xs={9}
                  style={{
                      padding: '0 10px'
                  }}>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <Box>
                        <Typography
                            style={{
                                fontSize: '1em',
                                fontWeight: '400',
                                color: theme.palette.mode === 'dark' ?
                                    'rgba(255, 255, 255, 0.8)' :
                                    'rgba(0, 0, 0, 0.8)'
                            }}>
                            {value?.additionalService?.name}
                        </Typography>
                    </Box>
                    <Box
                        style={{
                            marginLeft: '20px',
                        }}>
                        <Typography
                            style={{
                                fontSize: '1em',
                                fontWeight: '700',
                                color: theme.palette.mode === 'dark' ?
                                    'rgba(255, 255, 255, 0.8)' :
                                    'rgba(0, 0, 0, 0.8)'
                            }}>
                            {value?.price}
                            &nbsp;$
                        </Typography>
                    </Box>
                </Box>
                <Box
                    style={{
                        margin: '5px 0'
                    }}>
                    <Typography
                        style={{
                            fontSize: '1em',
                            fontWeight: '400',
                            color: theme.palette.mode === 'dark' ?
                                'rgba(200, 199, 199, 0.8)' :
                                'rgba(50, 51, 51, 0.8)'
                        }}>
                        Number of selected services:&nbsp;
                        {selectedAddServices?.filter(service => service.id === value.id)?.length}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={3}
                  style={{
                      padding: '0 0 0 10px'
                  }}>
                <Box
                    style={{
                        padding: 0,
                        margin: 0
                    }}>
                    <IconButton onClick={() => handleAdd(value)}
                                style={{
                                    color: theme.palette.mode === 'dark' ?
                                        'rgba(255, 255, 255, 0.35)' :
                                        'rgba(0, 0, 0, 0.35)',
                                    padding: '0 5px',
                                    width: '25px',
                                    height: '25px',
                                }}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton onClick={() => handleRemove(value)}
                                disabled={selectedAddServices.find(el => el.id === value.id) === undefined}
                                style={{
                                    color: theme.palette.mode === 'dark' ?
                                        'rgba(255, 255, 255, 0.35)' :
                                        'rgba(0, 0, 0, 0.35)',
                                    padding: '0 5px',
                                    width: '25px',
                                    height: '25px',
                                }}>
                        <RemoveIcon/>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SelectedAdditionalServices;