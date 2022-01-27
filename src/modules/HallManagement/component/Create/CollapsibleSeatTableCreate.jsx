import React from 'react'
import {
    Box,
    ButtonGroup,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import SeatRowCreate from "./SeatRowCreate";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CollapsibleSeatTableCreate = ({
                                        indexRow,
                                        openSeats,
                                        values,
                                        handleChange,
                                        handleBlur,
                                        errors,
                                        touched,
                                        handleAddClick,
                                        handleRemoveClick,
                                        hallManagementState,
                                        seatTypeState,
                                        numberSeats
                                    }) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={3}>
                <Collapse in={openSeats} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1, marginLeft: '100px', display: 'block'}}>
                        <Box display='block' justifyContent='center'>
                            <Typography component="h2" variant="h6" gutterBottom color="secondary" style={{
                                display: 'inline-block',
                                textAlign: 'left',
                                float: 'left'
                            }}>
                                Seats
                            </Typography>
                            <ButtonGroup style={{
                                display: 'inline-block',
                                textAlign: 'right',
                                float: 'right',
                            }}>
                                <IconButton
                                    aria-label='add'
                                    onClick={handleAddClick}
                                >
                                    <AddIcon/>
                                </IconButton>
                                <IconButton
                                    aria-label='clear'
                                    onClick={handleRemoveClick}
                                >
                                    <RemoveIcon/>
                                </IconButton>
                            </ButtonGroup>
                        </Box>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>id</TableCell>
                                    <TableCell align='center'>Number seat</TableCell>
                                    <TableCell align='center'>Seat type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    numberSeats.map((id, index) => (
                                        <React.Fragment key={index}>
                                            <SeatRowCreate
                                                values={values} errors={errors} touched={touched}
                                                handleChange={handleChange}
                                                hallManagementState={hallManagementState}
                                                seatTypeState={seatTypeState}
                                                handleBlur={handleBlur}
                                                index={index} indexRow={indexRow}
                                            />
                                        </React.Fragment>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default CollapsibleSeatTableCreate;