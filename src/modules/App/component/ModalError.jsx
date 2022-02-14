import React from 'react'
import {Box, IconButton, Modal, Typography, useTheme} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ModalError = ({openModalError, handleCloseModalError, modalErrorText}) => {
    const theme = useTheme()
    return (
        <Modal
            open={openModalError}
            onClose={handleCloseModalError}
        >
            <Box style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '400px',
                minHeight: '200px',
                background: "linear-gradient(to right top, rgb(81, 16, 43), rgb(39, 39, 42))",
                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                padding: '20px',
                borderRadius: '22px',
                overflow: 'hidden'
            }}>
                <Box style={{
                    display: 'flex',
                    justifyContent: 'right',
                }}>
                    <IconButton aria-label="close" onClick={handleCloseModalError} style={{
                        height: '22px',
                        width: '22px'
                    }}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                </Box>

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
            </Box>
        </Modal>
    )
}

export default ModalError;