import React from 'react'
import {ButtonGroup, IconButton, TableCell, TableRow, TextField} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const UserUpdateRow = ({
                           index, theme, values,
                           handleInputChange, handleSubmitEditClick,
                           handleCloseClick
                       }) => {
    return (
        <TableRow key={index}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component="th" scope="row" align="left">
                {index + 1}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                <TextField id="name" name="Name" variant="standard" size="small"
                           inputProps={{style: {textAlign: 'center'}}}
                           value={values.Name} onChange={handleInputChange}/>
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                <TextField id="email" name="Email" variant="standard" size="small"
                           inputProps={{style: {textAlign: 'center'}}}
                           value={values.Email} onChange={handleInputChange}/>
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                <TextField id="roleName" name="RoleName" variant="standard" size="small"
                           inputProps={{style: {textAlign: 'center'}}}
                           value={values.RoleName} onChange={handleInputChange}/>
            </TableCell>
            <TableCell component="th" scope="row" align="right">
                <ButtonGroup>
                    <IconButton aria-label='edit' onClick={handleSubmitEditClick}
                                style={{marginLeft: '5px', marginRight: '5px'}}>
                        <DoneIcon style={{fill: theme.palette.success.dark}}/>
                    </IconButton>
                    <IconButton aria-label='delete' onClick={handleCloseClick}
                                style={{marginLeft: '5px', marginRight: '5px'}}>
                        <CloseIcon style={{fill: theme.palette.error.dark}}/>
                    </IconButton>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    )
}

export default UserUpdateRow;