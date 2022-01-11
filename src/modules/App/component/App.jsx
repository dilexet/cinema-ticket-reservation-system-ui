import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import {ThemeProvider, CssBaseline} from '@mui/material';
import HomeContainer from "../../Home/container/HomeContainer";
import LoginContainer from "../../Login/container/LoginContainer";
import ButtonAppBarContainer from "../../ButtonAppBar/container/ButtonAppBarContainer";

const App = ({
                 darkMode,
                 setDarkMode,
                 darkTheme,
                 lightTheme,
                 setCookie,
             }) => {
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline>
                <ButtonAppBarContainer setDarkMode={setDarkMode} darkMode={darkMode} setCookie={setCookie}/>
                <Routes>
                    <Route exact path='/' element={<HomeContainer/>}/>
                    <Route path='/login' element={<LoginContainer/>}/>
                </Routes>
            </CssBaseline>
        </ThemeProvider>
    );
}


export default App;