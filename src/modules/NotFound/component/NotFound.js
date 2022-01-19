import React from "react"
import {Box, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <Box
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20%'
            }}>
            <Typography variant='h3'>
                The resource can not be found
            </Typography>
        </Box>
    )
}

export default NotFound;