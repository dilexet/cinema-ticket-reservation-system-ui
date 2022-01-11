import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import App from "../component/App";

const AppContainer = () => {
    const [cookie, setCookie] = useCookies();

    const [darkMode, setDarkMode] = React.useState(cookie.DarkMode === undefined ? false : Boolean(JSON.parse(cookie.DarkMode)));

    useEffect(() => {
        if (cookie.DarkMode === undefined) {
            setCookie('DarkMode', darkMode, {
                path: '/',
                expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
            });
        }
    }, [cookie.DarkMode, darkMode, setCookie]);

    return (
        <App darkMode={darkMode}
             setDarkMode={setDarkMode}
             setCookie={setCookie}/>
    );
}


export default AppContainer;
