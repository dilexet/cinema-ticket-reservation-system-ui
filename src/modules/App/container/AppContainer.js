import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import App from "../component/App";
import {isAuthorize} from "../../Shared/utils/TokenServices";
import {useAuthenticate} from "../../Shared/utils/AuthenticateContext";

const AppContainer = () => {
    const [cookie, setCookie] = useCookies();

    const [darkMode, setDarkMode] = React.useState(cookie.DarkMode === undefined ? false : Boolean(JSON.parse(cookie.DarkMode)));

    const [isLoading, setIsLoading] = useState(true)

    const {isAuthenticate, changeAuthenticate} = useAuthenticate();

    useEffect(() => {
        async function checkAuthorize() {
            const result = await isAuthorize();
            changeAuthenticate(result)
            setIsLoading(false)
        }

        checkAuthorize()
    }, [changeAuthenticate, isAuthenticate]);


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
             changeAuthenticate={changeAuthenticate}
        />
    );
}


export default AppContainer;
