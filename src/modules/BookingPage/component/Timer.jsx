import React from 'react'
import {useTheme} from '@mui/material'

const Timer = ({minutes, seconds}) => {
    const theme = useTheme();
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{
                fontSize: '25px',
                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)',
            }}>
                <span>
                    {
                        minutes >= 10 ?
                            minutes : `0${minutes}`
                    }
                </span>
                :
                <span>
                    {
                        seconds >= 10 ?
                            seconds : `0${seconds}`
                    }
                </span>
            </div>
        </div>
    );
}

export default Timer;