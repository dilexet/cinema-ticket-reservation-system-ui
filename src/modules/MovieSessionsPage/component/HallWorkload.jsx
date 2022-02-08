import React from "react";
import {Box} from "@mui/material";

const HallWorkload = ({value}) => {
    return (
        <Box style={{
            marginTop: '20px',
            marginBottom: 0,
            height: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <Box style={{
                display: 'inline-block',
                flex: 'auto',
                height: '100%',
                width: `${100 - value.hallWorkload}%`,
                background: 'rgb(63, 182, 24)'
            }}/>
            <Box style={{
                display: 'inline-block',
                flex: 'auto',
                height: '100%',
                width: `${value.hallWorkload}%`,
                background: 'rgb(255, 255, 255, 0.15)'
            }}/>
        </Box>
    )
}

export default HallWorkload;