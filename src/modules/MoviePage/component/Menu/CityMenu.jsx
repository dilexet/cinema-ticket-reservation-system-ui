import React from 'react'
import {
    Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from '@mui/icons-material/Check';
import {Search, SearchIconWrapper, StyledInputBase} from "../../../TopAppBar/constants/SearchStyled";

const CityMenu = ({open, handleChange, movieFilterState, filter, handleCityChoose}) => {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{
                display: 'block',
                padding: '1.25em',
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
                <Box>
                    <Search style={{background: 'rgb(220, 220, 220)'}} onChange={handleChange}>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                </Box>
                <Box style={{margin: '15px 0'}}>
                    <List>
                        {
                            movieFilterState?.cityNamesState?.listOfTitles?.length !== 0 ?
                                movieFilterState?.cityNamesState?.listOfTitles?.map((title, index) => (
                                    filter.CityName === title ?
                                        <ListItemButton key={index}
                                                        onClick={() => handleCityChoose("")}
                                                        style={{color: 'rgb(212, 7, 84)',}}>
                                            <ListItemIcon
                                                style={{
                                                    color: 'rgb(212, 7, 84)',
                                                    minWidth: '20px',
                                                    marginRight: '10px'
                                                }}>
                                                <CheckIcon fontSize='small'/>
                                            </ListItemIcon>
                                            <ListItemText primary={title}/>
                                        </ListItemButton> :
                                        <ListItemButton key={index}
                                                        onClick={() => handleCityChoose(title)}
                                                        style={{color: 'rgb(39, 39, 42)'}}>
                                            <ListItemText primary={title}/>
                                        </ListItemButton>
                                )) : <ListItem><ListItemText primary='No results'/></ListItem>

                        }
                    </List>
                </Box>
            </Box>
        </Collapse>
    )
}

export default CityMenu;