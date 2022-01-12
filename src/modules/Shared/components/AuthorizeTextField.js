import {TextField} from "@mui/material";
import React from "react";

const AuthorizeTextField = ({
                                error, helperText,
                                value, onChange, onBlur,
                                ...props
                            }) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}

            id={props.id}
            label={props.label}
            name={props.name}
            type={props.type}
            autoFocus={props.autoFocus}
            autoComplete={props.autoComplete}

            error={error}
            helperText={helperText}

            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
        />
    )
}

export default AuthorizeTextField;