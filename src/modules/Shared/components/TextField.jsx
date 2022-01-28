import React from 'react';
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@mui/material";

const TextField = ({
                       error, helperText,
                       value, onChange, onBlur,
                       variant, size, margin, style, inputProps,
                       outlinedInputStyle, formControlStyle,
                       ...props
                   }) => {
    return (
        <FormControl
            variant={variant}
            size={size}
            margin={margin}
            required={true}
            fullWidth={true}
            style={formControlStyle}
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
                inputProps={inputProps}
                value={value}
                style={outlinedInputStyle}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
            <FormHelperText style={{minWidth: '150px'}}>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default TextField;