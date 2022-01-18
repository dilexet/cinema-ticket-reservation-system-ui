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
import {darkTheme, lightTheme} from "../utils/DarkModeService";
import Footer from "../../Footer/component/Footer";

const App = ({
                 darkMode,
                 setDarkMode,
                 setCookie,
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
                    <TopAppBarContainer setDarkMode={setDarkMode} darkMode={darkMode} setCookie={setCookie}/>
                    <Container component="main" sx={{mt: 8, mb: 2}} maxWidth="sm">
                        <Routes>
                            <Route exact path='/' element={<HomeContainer/>}/>
                            <Route path='/login' element={<LoginContainer/>}/>
                            <Route path='/register' element={<RegisterContainer/>}/>
                        </Routes>
                    </Container>
                    <Footer description={"Some description"}/>
                </CssBaseline>
            </Box>
        </ThemeProvider>
    );
}

export default App;