import React from "react";

import TopAppBar from "../component/TopAppBar";

const TopAppBarContainer = ({darkMode, setDarkMode, setCookie, isAuthenticate}) => {
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const onChangeTheme = () => {
        setCookie('DarkMode', !darkMode, {
            path: '/',
            expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
        });
        setDarkMode(!darkMode);
    }

    return (
        <TopAppBar darkMode={darkMode} onChangeTheme={onChangeTheme} isAuthenticate={isAuthenticate}
                   menuId={menuId} mobileMenuId={mobileMenuId} anchorEl={anchorEl}
                   handleProfileMenuOpen={handleProfileMenuOpen} handleMobileMenuOpen={handleMobileMenuOpen}
                   mobileMoreAnchorEl={mobileMoreAnchorEl} isMobileMenuOpen={isMobileMenuOpen}
                   handleMobileMenuClose={handleMobileMenuClose} isMenuOpen={isMenuOpen}
                   handleMenuClose={handleMenuClose}/>
    );
}

export default TopAppBarContainer;