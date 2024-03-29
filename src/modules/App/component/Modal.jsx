import React from 'react'
import {Box, IconButton, Modal as MuiModal, useTheme} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({openModal, handleCloseModal, component: Component, ...props}) => {
    const theme = useTheme()
    return (
        <MuiModal
            open={openModal}
            onClose={handleCloseModal}
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
                    <IconButton aria-label="close" onClick={handleCloseModal} style={{
                        height: '22px',
                        width: '22px'
                    }}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                </Box>

                <Component {...props}/>
            </Box>
        </MuiModal>
    )
}

export default Modal;