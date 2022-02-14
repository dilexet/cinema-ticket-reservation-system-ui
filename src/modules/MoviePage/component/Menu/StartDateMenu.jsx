import React from 'react'
import {Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const StartDateMenu = ({open, dates, filter, handleDateChange}) => {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{
                display: 'block',
                padding: '5px 8px',
                background: 'rgb(241, 241, 241)',
                borderTop: '2px solid rgb(212, 7, 84)',
                color: 'rgb(39, 39, 42)',
                overflow: 'hidden auto',
                maxHeight: '250px',
                position: 'absolute',
                zIndex: '10',
                opacity: '0.8',
                maxWidth: '242px'
            }}>
                <Box style={{margin: '5px 0'}}>
                    <List>
                        {
                            dates ?
                                dates?.map((date, index) => (
                                    filter.StartDate === date ?
                                        <ListItemButton key={index}
                                                        onClick={() => handleDateChange(null)}
                                                        style={{color: 'rgb(212, 7, 84)'}}>
                                            <ListItemIcon
                                                style={{
                                                    color: 'rgb(212, 7, 84)',
                                                    minWidth: '20px',
                                                    marginRight: '10px'
                                                }}>
                                                <CheckIcon fontSize='small'/>
                                            </ListItemIcon>
                                            <ListItemText primary={date}/>
                                        </ListItemButton> :
                                        <ListItemButton key={index}
                                                        onClick={() => handleDateChange(date)}
                                                        style={{color: 'rgb(39, 39, 42)'}}>
                                            <ListItemText primary={date}
                                                          style={{
                                                              fontSize: '1em',
                                                              fontWeight: '400',
                                                          }}
                                            />
                                        </ListItemButton>
                                )) : <ListItem><ListItemText primary='No results'/></ListItem>

                        }
                    </List>
                </Box>
            </Box>
        </Collapse>
    )
}

export default StartDateMenu;