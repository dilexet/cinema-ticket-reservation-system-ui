import React from "react";
import {Box, Button, Divider, Typography} from "@mui/material";
import SelectedSeat from "./SelectedSeat";
import SelectedAdditionalServices from "./SelectedAdditionalServices";

const SelectedSeatsContent = ({
                                         theme, session, selectedSeats, handleCancelSelectSeat,
                                         selectedAdditionalServices, handleAddService, handleRemoveService,
                                         totalPrice, handleConfirmOrder
                                     }) => {
    return (
        <Box
            style={{
                margin: '25px 0', padding: '10px'
            }}>
            <Box
                style={{
                    marginBottom: '20px'
                }}>
                <Box
                    style={{
                        display: 'inline', textAlign: 'left',
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        My tickets
                    </Typography>
                    <Typography
                        style={{
                            marginTop: '25px',
                            fontSize: '15px',
                            fontWeight: '400',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                        }}>
                        {session?.hall?.name}
                    </Typography>
                </Box>
            </Box>
            <Divider/>
            <Box>
                <Box>
                    {
                        selectedSeats?.map((value, index) => (
                                <Box key={index}
                                     style={{
                                         borderBottom: theme.palette.mode === 'dark' ?
                                             '1px solid rgba(255, 255, 255, 0.15' :
                                             '1px solid rgba(0, 0, 0, 0.15',
                                     }}>
                                    <SelectedSeat theme={theme} value={value}
                                                  handleCancelSelectSeat={handleCancelSelectSeat}/>
                                </Box>
                            )
                        )
                    }
                </Box>
                <Box
                    style={{
                        display: 'inline', textAlign: 'left',
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            margin: '50px 0',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        You can select additional services
                    </Typography>
                </Box>
                <Box>
                    {
                        session.sessionAdditionalServices?.map((value, index) => (
                                <Box key={index}
                                     style={{
                                         borderBottom: theme.palette.mode === 'dark' ?
                                             '1px solid rgba(255, 255, 255, 0.15' :
                                             '1px solid rgba(0, 0, 0, 0.15',
                                     }}>
                                    <SelectedAdditionalServices theme={theme} value={value}
                                                                selectedAddServices={selectedAdditionalServices}
                                                                handleAdd={handleAddService}
                                                                handleRemove={handleRemoveService}
                                    />
                                </Box>
                            )
                        )
                    }
                </Box>
                <Box
                    style={{
                        marginTop: '25px', textAlign: 'center'
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.625em',
                            fontWeight: '500',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        <span>
                            Total price:&nbsp;
                        </span>
                        <strong>
                            <span>
                                {totalPrice}
                            </span>
                        </strong>
                        <small>
                            &nbsp;$
                        </small>
                    </Typography>
                </Box>
            </Box>
            <Box
                style={{
                    margin: '25px 0'
                }}>
                <Button variant="outlined" fullWidth
                        onClick={() => handleConfirmOrder(selectedSeats, selectedAdditionalServices)}
                        style={{
                            color: theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            textTransform: 'none',
                            borderRadius: '22px',
                            border: theme.palette.mode === 'dark' ? '2px solid #FFFFFF' : '2px solid #000000',
                            fontSize: '1em'
                        }}>
                    Confirm
                </Button>
            </Box>
        </Box>
    )
}

export default SelectedSeatsContent;