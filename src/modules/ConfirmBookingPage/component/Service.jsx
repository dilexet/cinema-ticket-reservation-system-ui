import React from "react";
import {Box, Typography} from "@mui/material";

const Service = ({theme, value}) => {
    return (
        <Box style={{
            margin: '20px 0'
        }}>
            <Box style={{
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
            </Box>
        </Box>
    )
}

export default Service;