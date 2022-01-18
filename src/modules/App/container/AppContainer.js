import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import App from "../component/App";
import {isAuthorize} from "../../Shared/utils/TokenServices";

const AppContainer = () => {
    const [cookie, setCookie] = useCookies();

    const [darkMode, setDarkMode] = React.useState(cookie.DarkMode === undefined ? false : Boolean(JSON.parse(cookie.DarkMode)));

    const [isAuthenticate, setIsAuthenticate] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let cleanupFunction = false;

        async function checkAuthorize() {
            console.log("App")
            const result = await isAuthorize();
            setIsAuthenticate(result)
            setIsLoading(false)
        }

        checkAuthorize()

        return () => cleanupFunction = true;
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
