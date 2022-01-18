import React from "react";
import {Typography, Link} from "@mui/material";
import {WEB_SITE_NAME} from "../../Shared/constants/WebSiteName";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                {WEB_SITE_NAME}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Copyright