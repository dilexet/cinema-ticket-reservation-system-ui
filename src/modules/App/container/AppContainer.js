import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {isAuthorize} from "../../Shared/utils/TokenServices";
import App from "../component/App";

const AppContainer = () => {
    const [cookie, setCookie] = useCookies();

    const [darkMode, setDarkMode] = React.useState(cookie.DarkMode === undefined ? true : Boolean(JSON.parse(cookie.DarkMode)));

    const [isAuthenticate, setIsAuthenticate] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const errorHandlerState = useSelector((state) => state.errorHandler);

    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuthorize() {
            if (isLoading) {
                setIsLoading(false)
                const result = await isAuthorize();
                setIsAuthenticate(result)
            }
        }

        checkAuthorize()
    }, [isAuthenticate, isLoading]);

    const [openModalError, setOpenModalError] = React.useState(false);
    const [modalErrorText, setModalErrorText] = React.useState("");

    const handleCloseModalError = () => setOpenModalError(false);

    useEffect(() => {
        if (errorHandlerState?.error?.code === 500) {
            setOpenModalError(true)
            setModalErrorText("Internal server error! :)")
        } else if (errorHandlerState?.error?.code === 404) {
            navigate('/not-found')
        } else if (errorHandlerState?.error?.code === 401 || errorHandlerState?.error?.code === 403) {
            navigate('/login')
        }
    }, [errorHandlerState?.error?.code, navigate])

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
             openModalError={openModalError}
             modalErrorText={modalErrorText}
             handleCloseModalError={handleCloseModalError}
        />
    );
}


export default AppContainer;
