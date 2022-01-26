import React from "react";
import {getName} from "../../Shared/utils/TokenServices";
import TopAppBar from "../component/TopAppBar";

const TopAppBarContainer = ({darkMode, setDarkMode, setCookie, isAuthenticate}) => {
    const menuId = 'primary-search-account-menu';

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(null);
    const [userName, setUserName] = React.useState(null);

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

    React.useEffect(() => {
        if (isLoading === true) {
            const name = getName();
            setUserName(name)
        }
        if (isLoading === null) {
            setIsLoading(true)
        }
    }, [isLoading, userName]);

    return (
        <TopAppBar darkMode={darkMode} onChangeTheme={onChangeTheme} isAuthenticate={isAuthenticate}
                   menuId={menuId} anchorEl={anchorEl} handleProfileMenuOpen={handleProfileMenuOpen}
                   isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} userName={userName}/>
    );
}

export default TopAppBarContainer;