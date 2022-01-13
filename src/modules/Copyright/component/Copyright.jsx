import Link from "@mui/material/Link";
import WEB_SITE_NAME from "../../Shared/constants/WebSiteName";
import {Typography} from "@mui/material";
import React from "react";

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