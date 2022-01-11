import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ButtonAppBar = ({darkMode, onChangeTheme}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Button color="inherit" component={Link} to='/'>
                            Home
                        </Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <IconButton sx={{ml: 1}} onClick={onChangeTheme}
                                    color="inherit">
                            {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;