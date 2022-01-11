import React from "react";

import ButtonAppBar from "../component/ButtonAppBar";

const ButtonAppBarContainer = ({darkMode, setDarkMode, setCookie}) => {
    const onChangeTheme = () => {
        setCookie('DarkMode', !darkMode, {
            path: '/',
            expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
        });
        setDarkMode(!darkMode);
    }

    return (
        <ButtonAppBar darkMode={darkMode} onChangeTheme={onChangeTheme}/>
    );
}

export default ButtonAppBarContainer;