import React, {useEffect} from 'react';
import {createTheme} from '@mui/material';
import {useCookies} from "react-cookie";
import App from "../component/App";

const AppContainer = () => {
    const [cookie, setCookie] = useCookies();

    const [darkMode, setDarkMode] = React.useState(cookie.DarkMode === undefined ? false : Boolean(JSON.parse(cookie.DarkMode)));

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    useEffect(() => {
        if (cookie.DarkMode === undefined) {
            setCookie('DarkMode', darkMode, {
                path: '/',
                expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
            });
        }
    }, []);

    return (
        <App darkMode={darkMode}
             setDarkMode={setDarkMode}
             darkTheme={darkTheme}
             lightTheme={lightTheme}
             setCookie={setCookie}/>
    );
}


export default AppContainer;
