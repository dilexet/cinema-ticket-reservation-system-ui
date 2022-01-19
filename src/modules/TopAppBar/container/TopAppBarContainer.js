import React from "react";
import TopAppBar from "../component/TopAppBar";
import {useAuthenticate} from "../../Shared/utils/AuthenticateContext";

const TopAppBarContainer = ({darkMode, setDarkMode, setCookie}) => {
    const menuId = 'primary-search-account-menu';

    const {isAuthenticate} = useAuthenticate();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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
                   menuId={menuId} anchorEl={anchorEl} handleProfileMenuOpen={handleProfileMenuOpen}
                   isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose}/>
    );
}

export default TopAppBarContainer;