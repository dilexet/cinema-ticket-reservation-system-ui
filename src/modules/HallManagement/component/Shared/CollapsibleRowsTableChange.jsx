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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RowChangeContainer from "../../container/Shared/RowChangeContainer";

const CollapsibleRowsTableChange = ({
                                        openRows,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        values,
                                        handleAddClick,
                                        handleRemoveClick,
                                        hallManagementState,
                                        setFieldValue
                                    }) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={openRows} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1, maxWidth: "md"}}>
                        <Box display='block' justifyContent='center'>
                            <Typography component="h2" variant="h6" gutterBottom color="secondary" style={{
                                display: 'inline-block',
                                textAlign: 'left',
                                float: 'left'
                            }}>
                                Rows
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
                                    <TableCell align="left"/>
                                    <TableCell align='center'>Number row</TableCell>
                                    <TableCell align='center'>Number of seats</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    values.rows ?
                                        values.rows.map((row, index) => (
                                            <React.Fragment key={index}>
                                                <RowChangeContainer
                                                    values={values} errors={errors} touched={touched}
                                                    handleChange={handleChange}
                                                    hallManagementState={hallManagementState} handleBlur={handleBlur}
                                                    index={index} setFieldValue={setFieldValue}
                                                />
                                            </React.Fragment>
                                        )) : <></>
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default CollapsibleRowsTableChange;