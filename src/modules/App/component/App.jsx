import React from 'react';
import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import TopAppBarContainer from "../../TopAppBar/container/TopAppBarContainer";
import Footer from "../../Footer/component/Footer";
import {darkTheme, lightTheme} from "../utils/DarkModeService";
import AppRoutes from "./AppRoutes";

const App = ({
                 darkMode, setDarkMode, setCookie, isLoading, isAuthenticate, setIsAuthenticate
             }) => {
    return (<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Box
            sx={{
                display: 'flex', flexDirection: 'column', minHeight: '100vh'
            }}
        >
            <CssBaseline>
                <TopAppBarContainer setDarkMode={setDarkMode} darkMode={darkMode} setCookie={setCookie}
                                    isAuthenticate={isAuthenticate}/>
                <AppRoutes isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate}
                           isLoading={isLoading}/>
                <Footer description={"Some description"}/>
            </CssBaseline>
        </Box>
    </ThemeProvider>);
}

export default App;