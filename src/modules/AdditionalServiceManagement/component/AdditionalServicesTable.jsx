import React from 'react';
import {
    Box,
    Container,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Grid,
    IconButton
} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Loading from "../../Loading/component/Loading";
import AdditionalServiceRowContainer from "../container/AdditionalServiceRowContainer";
import AdditionalServiceUpdateRowContainer from "../container/AdditionalServiceUpdateRowContainer";
import AdditionalServiceCreateRowContainer from "../container/AdditionalServiceCreateRowContainer";

const AdditionalServicesTable = ({
                                     theme, additionalServicesState, setOpenEditId, setOpenDeleteId,
                                     handleAddClick, openEditId, openDeleteId, setOpenAdd, openAdd
                                 }) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} maxWidth="md">
            <Grid item>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Box display='block' justifyContent='center'>
                        <Typography component="h2" variant="h6" color="secondary" style={{
                            display: 'inline-block',
                            textAlign: 'left',
                            float: 'left'
                        }}>
                            Additional service management
                        </Typography>
                        <IconButton aria-label='edit'
                                    onClick={handleAddClick}
                                    disabled={openAdd || openEditId !== -1 || openDeleteId !== -1}
                                    style={{
                                        display: 'inline-block',
                                        textAlign: 'right',
                                        float: 'right',
                                        marginRight: '45px'
                                    }}>
                            <AddBoxIcon style={{fill: theme.palette.success.dark}}/>
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography component="h1" variant="h5" color="secondary"
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                    }}
                                    fontStyle={{color: theme.palette.error.dark}}
                        >
                            {additionalServicesState?.error?.validationErrors?.AdditionalService ?? ""}
                        </Typography>
                    </Box>
                    <Loading isLoading={additionalServicesState?.loading}/>

                    <TableContainer>
                        <Table width='auto' aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="center">Cinema name</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="right"/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {additionalServicesState.dataList.additionalServices.map((additionalService, index) => (
                                    <React.Fragment key={index}>
                                        {
                                            openEditId === index ?
                                                <AdditionalServiceUpdateRowContainer
                                                    additionalService={additionalService}
                                                    index={index}
                                                    setOpenEditId={setOpenEditId}
                                                    theme={theme}
                                                /> :
                                                <AdditionalServiceRowContainer
                                                    additionalService={additionalService}
                                                    index={index}
                                                    openEditId={openEditId}
                                                    setOpenEditId={setOpenEditId}
                                                    openDeleteId={openDeleteId}
                                                    setOpenDeleteId={setOpenDeleteId}
                                                    theme={theme} openAdd={openAdd}
                                                />
                                        }
                                    </React.Fragment>
                                ))}
                                {
                                    openAdd === true ?
                                        <AdditionalServiceCreateRowContainer theme={theme} setOpenAdd={setOpenAdd}/>
                                        : <></>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Container>
    )
}

export default AdditionalServicesTable;