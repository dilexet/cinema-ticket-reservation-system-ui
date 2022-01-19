import React from 'react'
import {Box, CircularProgress, Backdrop} from "@mui/material";

const Loading = ({isLoading}) => {
    return (
        <Box marginLeft='auto' marginRight='auto'>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Box>
    )
}

export default Loading;