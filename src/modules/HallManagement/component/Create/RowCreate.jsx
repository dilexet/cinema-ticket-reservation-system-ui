import React from "react"
import {IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "../../../Shared/components/TextField";
import handleErrorService from "../../../Shared/utils/HandleErrorService";
import CollapsibleSeatTableCreateContainer from "../../container/Create/CollapsibleSeatTableCreateContainer";

const RowCreate = ({
                       index,
                       values,
                       handleChange,
                       handleBlur,
                       errors,
                       touched,
                       hallManagementState,
                       setOpenSeats,
                       openSeats
                   }) => {
    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row" align='left'>{index + 1}</TableCell>
                <TableCell component="th" scope="row" align="left">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenSeats(!openSeats)}
                    >
                        {openSeats ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align='center'>
                    <TextField
                        id={`rows[${index}].NumberRow`}
                        label="NumberRow"
                        type="number"
                        name={`Rows[${index}].NumberRow`}
                        formControlStyle={{maxWidth: '200px'}}
                        variant="outlined"
                        inputProps={{style: {textAlign: 'center'}, min: '0'}}
                        value={values.Rows[index].NumberRow}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoFocus={true}
                        {...handleErrorService(hallManagementState, errors, touched,
                            `Rows[${index}].NumberRow`, `HallRequest.Rows[${index}].NumberRow`)}
                    />
                </TableCell>
                <TableCell component="th" scope="row" align='center'>{values.Rows[index].NumberOfSeats}</TableCell>
            </TableRow>
            <CollapsibleSeatTableCreateContainer
                indexRow={index}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched} openSeats={openSeats}/>
        </React.Fragment>
    )
}

export default RowCreate;