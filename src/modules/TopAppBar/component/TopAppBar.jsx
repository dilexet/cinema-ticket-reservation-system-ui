import * as React from 'react';
import {Link} from 'react-router-dom'
import {Toolbar, Typography, IconButton, AppBar, Box, Link as LinkMaterial, ButtonGroup} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {AccountCircle} from "@mui/icons-material";
import {WEB_SITE_NAME, WEB_SHORT_SITE_NAME} from "../../Shared/constants/WebSiteName";
import {Search, SearchIconWrapper, StyledInputBase} from "../constants/SearchStyled";
import TopMenu from "./TopMenu";

const TopAppBar = ({
                       darkMode, onChangeTheme, isAuthenticate, menuId,
                       handleProfileMenuOpen, anchorEl, isMenuOpen,
                       handleMenuClose, theme
                   }) => {
    return (
        <Box>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>

                    <Typography variant="h6" color="inherit"
                                style={{textDecoration: 'none', marginRight: "10px"}} component={Link} to='/'
                                noWrap sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'}}}>
                        {WEB_SITE_NAME}
                    </Typography>

                    <Typography variant="h6" color="inherit"
                                style={{textDecoration: 'none', marginRight: "10px"}} component={Link} to='/'
                                noWrap sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'none'}}}>
                        {WEB_SHORT_SITE_NAME}
                    </Typography>


                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>

                    <Box sx={{flexGrow: 1}}/>

                    <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}} style={{
                        margin: '0 50px'
                    }}>
                        <Box style={{
                            margin: '0 20px'
                        }}>
                            <LinkMaterial sx={{my: 1, mx: 1.5}}
                                          variant="button" component={Link} to='/afisha'
                                          style={{
                                              color: theme.palette.mode === 'dark' ?
                                                  "rgb(255, 255, 255)" :
                                                  "rgb(0, 0, 0)",
                                              textDecoration: 'none',
                                              marginLeft: '20px',
                                              opacity: '0.9',
                                              fontSize: '1em',
                                              fontWeight: '400',
                                              textTransform: 'none'
                                          }}>
                                Afisha
                            </LinkMaterial>
                        </Box>
                        <Box>
                            <ButtonGroup size="middle">
                                <IconButton sx={{display: {xs: {ml: 0, mr: 0}, md: {ml: 1, mr: 1}}}}
                                            onClick={onChangeTheme}
                                            color="inherit">
                                    {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                            </ButtonGroup>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <TopMenu menuId={menuId} anchorEl={anchorEl} isAuthenticate={isAuthenticate}
                     isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose}/>
        </Box>
    );
}

export default TopAppBar;