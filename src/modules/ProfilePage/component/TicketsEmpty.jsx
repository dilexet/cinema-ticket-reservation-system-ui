import React from 'react'
import {Box, Link as LinkMaterial, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const TicketsEmpty = ({theme}) => {
    return (
        <Box style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: theme.palette.mode === 'dark' ?
                "1px dashed rgba(255, 255, 255, 0.35)" :
                "1px dashed rgba(0, 0, 0, 0.35)",
            minHeight: '100px',
            width: '100%',
            borderRadius: '55px',
            padding: '40px'
        }}>
            <Typography component='h2' style={{
                opacity: '0.5',
                float: 'left',
                fontSize: '1em',
                fontWeight: '400',
                margin: '0',
            }}>
                Purchased tickets will be displayed here :)&nbsp;&nbsp;
            </Typography>
            <LinkMaterial color='inherit' variant="body2" component={Link} to='/afisha' style={{
                textDecoration: 'none',
                color: 'rgb(28, 156, 223)',
                marginLeft: '20px',
                opacity: '0.9',
                fontSize: '1em',
                fontWeight: '400'
            }}>
                Select movie
            </LinkMaterial>
        </Box>
    )
}

export default TicketsEmpty;