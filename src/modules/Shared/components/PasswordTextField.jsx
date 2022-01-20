import React, {useState} from "react";
import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordTextField = ({
                                    error, helperText,
                                    value, onChange, onBlur,
                                    variant, size, margin, style,
                                    ...props
                                }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <FormControl
            variant={variant}
            size={size}
            margin={margin}
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
                autoComplete="current-password"
                style={style}
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

export default PasswordTextField;