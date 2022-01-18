import * as React from 'react';
import {Link} from 'react-router-dom'
import {Toolbar, Typography, IconButton, AppBar, Box} from '@mui/material'
import LinkMaterial from "@mui/material/Link";
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import MoreIcon from '@mui/icons-material/MoreVert';
import {WEB_SITE_NAME, WEB_SHORT_SITE_NAME} from "../../Shared/constants/WebSiteName";
import TopMenu from "./TopMenu";
import TopMobileMenu from "./TopMobileMenu";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Search, SearchIconWrapper, StyledInputBase} from "../constants/SearchStyled";

const TopAppBar = ({
                       darkMode, onChangeTheme, isAuthenticate, menuId, mobileMenuId,
                       handleProfileMenuOpen, handleMobileMenuOpen, mobileMoreAnchorEl,
                       isMobileMenuOpen, handleMobileMenuClose,
                       anchorEl, isMenuOpen, handleMenuClose
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

                    <IconButton sx={{display: {xs: {ml: 0, mr: 0}, md: {ml: 1, mr: 1}}}} onClick={onChangeTheme}
                                color="inherit">
                        {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>

                    <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
                        <LinkMaterial
                            style={{textDecoration: 'none', textTransform: "capitalize"}}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Features
                        </LinkMaterial>
                        <LinkMaterial
                            style={{textDecoration: 'none', textTransform: "capitalize"}}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Enterprise
                        </LinkMaterial>
                        <LinkMaterial
                            style={{textDecoration: 'none', textTransform: "capitalize"}}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Support
                        </LinkMaterial>
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
                    </Box>

                    <Box sx={{display: {xs: 'block', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <TopMobileMenu mobileMenuId={mobileMenuId} mobileMoreAnchorEl={mobileMoreAnchorEl}
                           isMobileMenuOpen={isMobileMenuOpen} handleMobileMenuClose={handleMobileMenuClose}
                           isAuthenticate={isAuthenticate}/>
            <TopMenu menuId={menuId} anchorEl={anchorEl} isAuthenticate={isAuthenticate}
                     isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose}/>
        </Box>
    );
}

export default TopAppBar;