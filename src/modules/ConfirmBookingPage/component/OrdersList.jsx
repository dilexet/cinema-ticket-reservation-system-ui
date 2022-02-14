import React from "react";
import {Box, Typography} from "@mui/material";
import Service from "./Service";
import Ticket from "./Ticket";

const OrdersList = ({theme, selectedAdditionalServices, selectedSeats}) => {
    return (
        <Box style={{
            margin: '20px 50px 10px 20px'
        }}>
            <Box>
                <Typography component='h1' style={{
                    fontSize: '24px',
                    fontWeight: '400'
                }}>
                    My tickets
                </Typography>
                <Box style={{
                    marginTop: '30px',
                    marginBottom: '60px',
                    borderTop: theme.palette.mode === 'dark' ?
                        '1px solid rgba(255, 255, 255, 0.15)' :
                        '1px solid rgba(0, 0, 0, 0.15)'
                }}>
                    {
                        selectedSeats?.map((value, index) => (
                            <Box key={index} style={{
                                borderBottom: theme.palette.mode === 'dark' ?
                                    '1px solid rgba(255, 255, 255, 0.15)' :
                                    '1px solid rgba(0, 0, 0, 0.15)'
                            }}>
                                <Ticket theme={theme} value={value}/>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            {
                selectedAdditionalServices?.length === 0 ?
                    <Box/> :
                    <Box>
                        <Typography component='h1' style={{
                            fontSize: '24px',
                            fontWeight: '400'
                        }}>
                            My additional services
                        </Typography>
                        <Box style={{
                            marginTop: '30px',
                            marginBottom: '60px',
                            borderTop: theme.palette.mode === 'dark' ?
                                '1px solid rgba(255, 255, 255, 0.15)' :
                                '1px solid rgba(0, 0, 0, 0.15)'
                        }}>
                            {
                                selectedAdditionalServices?.map((value, index) => (
                                    <Box key={index} style={{
                                        borderBottom: theme.palette.mode === 'dark' ?
                                            '1px solid rgba(255, 255, 255, 0.15)' :
                                            '1px solid rgba(0, 0, 0, 0.15)'
                                    }}>
                                        <Service theme={theme} value={value}/>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
            }
        </Box>
    )
}

export default OrdersList;