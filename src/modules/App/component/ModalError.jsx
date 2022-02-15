import React from 'react'
import {Box, Typography} from "@mui/material";

const ModalError = ({modalErrorText}) => {
    return (
        <Box style={{
            width: '100%'
        }}>
            <Box>
                <Typography
                    style={{
                        fontSize: '1.625em',
                        fontWeight: '700',
                        opacity: '1'
                    }}>
                    Error
                </Typography>
            </Box>
            <Box style={{
                margin: '20px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {modalErrorText}
                </Typography>
            </Box>
        </Box>
    )
}

export default ModalError;