import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const AuthorizeButton = ({
                             isLoading,
                             buttonText,
                             ...props
                         }) => {

    return (
        <LoadingButton
            type="submit"
            fullWidth
            style={{borderRadius: "20px"}}
            size='medium'
            sx={{mt: 3, mb: 2}}
            loading={isLoading}
            loadingIndicator="Loading..."
            variant="outlined"
            {...props}
        >
            {buttonText}
        </LoadingButton>
    )
}

export default AuthorizeButton;