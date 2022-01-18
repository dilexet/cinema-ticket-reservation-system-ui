import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import {ThemeProvider, CssBaseline, Container, Box} from '@mui/material';
import HomeContainer from "../../Home/container/HomeContainer";
import LoginContainer from "../../Login/container/LoginContainer";
import TopAppBarContainer from "../../TopAppBar/container/TopAppBarContainer";
import RegisterContainer from "../../Register/container/RegisterContainer";
import Footer from "../../Footer/component/Footer";
import PublicRoute from "../../Shared/components/PublicRoute";
import PrivateRoute from "../../Shared/components/PrivateRoute";
import LogoutContainer from "../../Logout/container/LogoutContainer";
import {darkTheme, lightTheme} from "../utils/DarkModeService";

const App = ({
                 darkMode,
                 setDarkMode,
                 setCookie,
                 isLoading,
                 isAuthenticate,
                 setIsAuthenticate
             }) => {
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline>
                    <TopAppBarContainer setDarkMode={setDarkMode} darkMode={darkMode} setCookie={setCookie}
                                        isAuthenticate={isAuthenticate}/>
                    <TopAppBarContainer setDarkMode={setDarkMode} darkMode={darkMode} setCookie={setCookie}/>
                    <TopAppBarContainer setDarkMode={setDarkMode} darkMode={darkMode} setCookie={setCookie}
                                        isAuthenticate={isAuthenticate}/>
                    <Container component="main" sx={{mt: 8, mb: 2}} maxWidth="sm">
                        <Routes>
                            <Route exact path='/'
                                   element={<PrivateRoute isAuthenticate={isAuthenticate}
                                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                          component={HomeContainer}/>}/>
                            <Route exact path='/logout'
                                   element={<PrivateRoute isAuthenticate={isAuthenticate}
                                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                          component={LogoutContainer}/>}/>
                            <Route path='/login'
                                   element={<PublicRoute isAuthenticate={isAuthenticate}
                                                         setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                         component={LoginContainer} restricted={true}/>}/>
                            <Route path='/register'
                                   element={<PublicRoute isAuthenticate={isAuthenticate}
                                                         setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                         component={RegisterContainer} restricted={true}/>}/>
                        </Routes>
                    </Container>
                    <Footer description={"Some description"}/>
                </CssBaseline>
            </Box>
        </ThemeProvider>
    );
}

export default App;