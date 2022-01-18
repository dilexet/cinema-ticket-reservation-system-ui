import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import React, {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const AuthorizePasswordField = ({
                                    error, helperText,
                                    value, onChange, onBlur,
                                    ...props
                                }) => {
    const [showPassword, setShowPassword] = useState(false)
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
                type={showPassword ? 'text' : 'password'}
                autoFocus={props.autoFocus}
                autoComplete={props.autoComplete}
                style={{borderRadius: "20px"}}
                value={value}
                onChange={onChange}
                onBlur={onBlur}

                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(showPassword => !showPassword)}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default AuthorizePasswordField;