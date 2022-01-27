import React from 'react'
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const SelectField = ({
                         id, value, name, label, onChange,
                         onBlur, error, helperText, defaultField, data,
                         itemField, ...props
                     }) => {
    return (
        <FormControl
            sx={{m: 1, minWidth: '210px'}}
            required={true}
            error={error}
        >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select
                id={id}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            >
                <MenuItem value="">
                    <em>{defaultField}</em>
                </MenuItem>
                {
                    data?.map((item, index) => (
                        <MenuItem key={index} value={item[itemField]}>{item.name}</MenuItem>
                    ))
                }
            </Select>
            <FormHelperText style={{minWidth: '150px'}}>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default SelectField;