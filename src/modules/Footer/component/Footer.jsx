import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Copyright from "../../Copyright/component/Copyright";
import WEB_SITE_NAME from "../../Shared/constants/WebSiteName";

const Footer = (props) => {
    const {description} = props;

    return (
        <Box component="footer"
             sx={{
                 py: 3,
                 px: 2,
                 mt: 'auto'
             }}>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center" gutterBottom>
                    {WEB_SITE_NAME}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright/>
            </Container>
        </Box>
    );
}

export default Footer;