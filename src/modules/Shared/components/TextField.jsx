import React from 'react';
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@mui/material";

const TextField = ({
                       error, helperText,
                       value, onChange, onBlur,
                       variant, size, margin, style, inputProps,
                       ...props
                   }) => {
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
                type={props.type}
                autoFocus={props.autoFocus}
                autoComplete={props.autoComplete}
                style={style}
                inputProps={inputProps}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default TextField;