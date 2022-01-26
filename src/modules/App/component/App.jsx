import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import HomeContainer from "../../Home/container/HomeContainer";
import LoginContainer from "../../Login/container/LoginContainer";
import TopAppBarContainer from "../../TopAppBar/container/TopAppBarContainer";
import RegisterContainer from "../../Register/container/RegisterContainer";
import Footer from "../../Footer/component/Footer";
import PublicRoute from "../../Shared/components/Routes/PublicRoute";
import PrivateRoute from "../../Shared/components/Routes/PrivateRoute";
import LogoutContainer from "../../Logout/container/LogoutContainer";
import UserManagementContainer from "../../UserManagement/container/UserManagementContainer";
import Dashboard from "../../Dashboard/component/Dashboard";
import NotFound from "../../NotFound/component/NotFound";
import MovieManagementContainer from "../../MovieManagement/container/MovieManagementContainer";
import CinemaManagementContainer from "../../CinemaManagement/container/CinemaManagementContainer";
import AdditionalServiceManagementContainer from "../../AdditionalServiceManagement/container/AdditionalServiceManagementContainer";

import {darkTheme, lightTheme} from "../utils/DarkModeService";
import AdminRoute from "../../Shared/components/Routes/AdminRoute";
import ManagerRoute from "../../Shared/components/Routes/ManagerRoute";

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
                        <Route exact path='/dashboard/*'
                               element={<PrivateRoute isAuthenticate={isAuthenticate}
                                                      setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                      component={Dashboard} restricted={false}/>}>
                            <Route index={true} element={<NotFound/>}/>
                            <Route exact path='user-management'
                                   element={<AdminRoute isAuthenticate={isAuthenticate}
                                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                          component={UserManagementContainer} restricted={false}/>}/>
                            <Route exact path='movie-management'
                                   element={<ManagerRoute isAuthenticate={isAuthenticate}
                                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                          component={MovieManagementContainer} restricted={false}/>}/>
                            <Route exact path='cinema-management'
                                   element={<ManagerRoute isAuthenticate={isAuthenticate}
                                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                          component={CinemaManagementContainer} restricted={false}/>}/>
                            <Route exact path='additional-service-management'
                                   element={<ManagerRoute isAuthenticate={isAuthenticate}
                                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                                          component={AdditionalServiceManagementContainer} restricted={false}/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>


                    </Routes>
                    <Footer description={"Some description"}/>
                </CssBaseline>
            </Box>
        </ThemeProvider>
    );
}

export default App;