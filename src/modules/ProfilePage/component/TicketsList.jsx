import React from "react";
import {Box, Divider, Typography} from "@mui/material";
import TicketsEmpty from "./TicketsEmpty";
import TicketsCardContainer from "../container/TicketsCardContainer";

const TicketsList = ({theme, tickets}) => {
    return (
        <Box style={{
            marginTop: '60px',
            width: '100%'
        }}>
            <Box style={{
                display: 'inline',
                textAlign: 'left',
            }}>
                <Typography component='h2' style={{
                    opacity: '0.8',
                    paddingBottom: '18px',
                    fontSize: '2.25em',
                    fontWeight: '700',
                    margin: 0,
                }}>
                    My tickets
                </Typography>
            </Box>
            {
                tickets ?
                    <React.Fragment>
                        <Divider/>
                        {
                            tickets?.map((ticket, index) => (
                                <Box key={index}>
                                    <TicketsCardContainer theme={theme} ticket={ticket}/>
                                    <Divider/>
                                </Box>
                            ))
                        }
                    </React.Fragment> :
                    <TicketsEmpty theme={theme}/>
            }
        </Box>
    )
}

export default TicketsList;