import React from "react";
import {Box, Divider, Typography, FormControlLabel, Switch} from "@mui/material";
import TicketsEmpty from "./TicketsEmpty";
import TicketsCardContainer from "../container/TicketsCardContainer";

const TicketsList = ({theme, tickets, showPastTickets, handleChangeShowPastTickets}) => {

    return (
        <Box style={{
            marginTop: '60px',
            width: '100%'
        }}>
            <Box style={{
                display: 'flex',
                textAlign: 'left',
                justifyContent: 'space-between'
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
                <FormControlLabel
                    control={<Switch checked={showPastTickets}
                                     onChange={handleChangeShowPastTickets}/>}
                    label={showPastTickets === true ? 'Only past tickets' : 'Only future tickets'}/>
            </Box>
            {
                tickets?.length > 0 ?
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