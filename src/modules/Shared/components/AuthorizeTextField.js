import {
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import React from "react";

const AuthorizeTextField = ({
                                error, helperText,
                                value, onChange, onBlur,
                                ...props
                            }) => {
    return (
        <FormControl
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            error={error}
        >
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
            <OutlinedInput
                id={props.id}
                label={props.label}
                name={props.name}
                type={props.type}
                autoFocus={props.autoFocus}
                autoComplete={props.autoComplete}
                style={{borderRadius: "20px"}}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default AuthorizeTextField;