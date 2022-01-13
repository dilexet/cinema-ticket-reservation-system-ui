import * as React from 'react';
import {Toolbar, Typography, Button, IconButton, AppBar, Box} from '@mui/material'
import LinkMaterial from "@mui/material/Link";
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WEB_SITE_NAME from "../../Shared/constants/WebSiteName";


const ButtonAppBar = ({darkMode, onChangeTheme}) => {
    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Typography variant="h6" color="inherit"
                                style={{textDecoration: 'none'}} component={Link} to='/'
                                noWrap sx={{flexGrow: 1}}>
                        {WEB_SITE_NAME}
                    </Typography>

                    <nav>
                        <LinkMaterial
                            style={{textDecoration: 'none', textTransform: "capitalize"}}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            {"Features"}
                        </LinkMaterial>
                        <LinkMaterial
                            style={{textDecoration: 'none', textTransform: "capitalize"}}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Enterprise
                        </LinkMaterial>
                        <LinkMaterial
                            style={{textDecoration: 'none', textTransform: "capitalize"}}
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Support
                        </LinkMaterial>
                    </nav>

                    <Box>
                        <IconButton sx={{ml: 1, mr: 1}} onClick={onChangeTheme}
                                    color="inherit">
                            {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>

                        <IconButton sx={{mr: 1}}>
                            <SearchIcon/>
                        </IconButton>
                    </Box>

                    <Button variant="outlined" style={{borderRadius: "25px"}} size='medium' sx={{my: 1, mx: 1.5}}>
                        Sign up
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default ButtonAppBar;