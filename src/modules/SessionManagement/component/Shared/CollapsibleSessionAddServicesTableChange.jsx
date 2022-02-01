import React from 'react'
import {
    Box,
    Collapse,
    Grid,
    Table, TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import SessionAdditionalServiceChange from "./SessionAdditionalServiceChange";

const CollapsibleSessionAddServicesTableChange = ({
                                                      openRows,
                                                      errors,
                                                      touched,
                                                      handleChange,
                                                      handleBlur,
                                                      values,
                                                      sessionManagementState
                                                  }) => {
    return (
        <TableRow>
            <TableCell style={{padding: 0}} colSpan={6}>
                <Collapse in={openRows} timeout="auto" unmountOnExit>
                    <Box sx={{
                        margin: 1,
                        float: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: 'md'
                    }}>

                        <Grid container spacing={1}>
                            <Grid container item xs={12}>
                                <Grid item xs={4}>
                                    <Typography component="h2" variant="h6" gutterBottom color="secondary" style={{
                                        display: 'inline-block',
                                        textAlign: 'left',
                                        float: 'left'
                                    }}>
                                        Session additional services
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Table width='auto' size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='left'>id</TableCell>
                                            <TableCell align='center'>Service name</TableCell>
                                            <TableCell align='center'>Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            values.sessionAdditionalServices ?
                                                values.sessionAdditionalServices.map((service, index) => (
                                                    <React.Fragment key={index}>
                                                        <SessionAdditionalServiceChange
                                                            values={values} errors={errors} touched={touched}
                                                            handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            index={index}
                                                            sessionManagementState={sessionManagementState}
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

export default CollapsibleSessionAddServicesTableChange;