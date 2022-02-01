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
    Typography,
    Grid
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SeatRowChangeContainer from "../../container/Shared/SeatRowChangeContainer";

const CollapsibleSeatTableChange = ({
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
                                        setFieldValue
                                    }) => {
    return (
        <TableRow>
            <TableCell style={{padding: 0}} colSpan={6}>
                <Collapse in={openSeats} timeout="auto" unmountOnExit>
                    <Box sx={{
                        margin: 1,
                        float: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: 'sm'
                    }}>

                        <Grid container spacing={1}>
                            <Grid container item xs={12}>
                                <Grid item xs={4}>
                                    <Typography component="h2" variant="h6" gutterBottom color="secondary" style={{
                                        display: 'inline-block',
                                        textAlign: 'left',
                                        float: 'left'
                                    }}>
                                        Seats
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box/>
                                </Grid>
                                <Grid item xs={4}>
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
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Table width='auto' size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='left'>id</TableCell>
                                            <TableCell align='center'>Number seat</TableCell>
                                            <TableCell align='center'>Seat type</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            values.rows[indexRow].seats ?
                                                values.rows[indexRow].seats.map((seat, index) => (
                                                    <React.Fragment key={index}>
                                                        <SeatRowChangeContainer
                                                            values={values} errors={errors} touched={touched}
                                                            handleChange={handleChange}
                                                            hallManagementState={hallManagementState}
                                                            seatTypeState={seatTypeState}
                                                            handleBlur={handleBlur}
                                                            index={index} indexRow={indexRow}
                                                            setFieldValue={setFieldValue}
                                                        />
                                                    </React.Fragment>
                                                )) : <></>
                                        }
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>


                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default CollapsibleSeatTableChange;