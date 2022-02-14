import React from "react";
import {Box, Button, Typography} from "@mui/material";

const TotalPayableContent = ({theme, totalPrice, handleConfirmOrder}) => {
    return (
        <Box style={{
            marginTop: '45px',
        }}>
            <Box style={{
                position: 'sticky',
                top: '60px',
                borderRadius: '22px',
                background: theme.palette.mode === 'dark' ? 'rgba(28, 156, 223, 0.15)' : 'rgba(222, 94, 27, 0.15)',
                textAlign: 'center',
                padding: '30px'
            }}>
                <Typography style={{
                    marginBottom: '15px', fontSize: '1.375em', fontWeight: '700', opacity: '0.9'
                }}>
                    Total payable
                </Typography>
                <Box style={{
                    margin: '15px 0',
                }}>
                    <Typography style={{
                        fontSize: '1.25em',
                    }}>
                    <span style={{
                        marginRight: '1.125em 0',
                        fontSize: '1em',
                        fontWeight: '400',
                        color: theme.palette.mode === 'dark' ? 'rgba(200, 199, 198, 0.8)' : 'rgba(50, 51, 52, 0.8)',
                    }}>
                        Total:&nbsp;
                      </span>
                        <span style={{
                            fontSize: '1.5em', fontWeight: '700',
                        }}>
                            {totalPrice}
                        </span>
                        <span style={{
                            fontSize: '1.5em', fontWeight: '400',
                        }}>
                            &nbsp;USD
                        </span>
                    </Typography>
                </Box>
                <Box style={{
                    marginTop: '20px',
                }}>
                    <Button fullWidth onClick={handleConfirmOrder} style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        border: 'none',
                        borderRadius: '22px',
                        height: '44px',
                        padding: '9px 30px',
                        position: 'relative',
                        color: 'inherit',
                        fontSize: '1em',
                        textAlign: 'center',
                        background: 'rgb(212, 7, 84)'
                    }}>
                        Pay for the order
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default TotalPayableContent;