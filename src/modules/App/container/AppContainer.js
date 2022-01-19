import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import {isAuthorize} from "../../Shared/utils/TokenServices";
import App from "../component/App";

const AppContainer = () => {
    const [cookie, setCookie] = useCookies();

    const [darkMode, setDarkMode] = React.useState(cookie.DarkMode === undefined ? false : Boolean(JSON.parse(cookie.DarkMode)));

    const [isAuthenticate, setIsAuthenticate] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function checkAuthorize() {
            if (isLoading) {
                setIsLoading(false)
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [isAuthenticate]);


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
             setCookie={setCookie}
             isLoading={isLoading}
             isAuthenticate={isAuthenticate}
             setIsAuthenticate={setIsAuthenticate}
        />
    );
}


export default AppContainer;
