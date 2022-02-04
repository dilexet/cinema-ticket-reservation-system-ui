import React from 'react'
import {Box, Collapse, FormControl, List, ListItem, OutlinedInput} from "@mui/material";

const NumberSeatsMenu = ({open, filter, handleNumberSeatsChange}) => {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{
                display: 'block',
                padding: '10px',
                background: 'rgb(241, 241, 241)',
                borderTop: '2px solid rgb(212, 7, 84)',
                color: 'rgb(39, 39, 42)',
                overflow: 'hidden auto',
                maxHeight: '250px',
            }}>
                <Box style={{margin: '5px 0'}}>
                    <List>
                        <ListItem>
                            <FormControl sx={{m: 1}} variant="outlined"
                                         style={{
                                             borderColor: 'red'
                                         }}
                            >
                                <OutlinedInput
                                    type='number'
                                    value={filter.NumberAvailableSeats}
                                    onChange={handleNumberSeatsChange}
                                    style={{
                                        border: '2px solid rgb(212, 7, 84)',
                                        color: 'rgb(39, 39, 42)',
                                    }}/>
                            </FormControl>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Collapse>
    )
}

export default NumberSeatsMenu;