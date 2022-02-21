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
import CinemaUpdateRowContainer from "../container/CinemaUpdateRowContainer";
import CinemaRowContainer from "../container/CinemaRowContainer";
import CinemaCreateRowContainer from "../container/CinemaCreateRowContainer";

const CinemasTable = ({
                          theme, cinemasState, setOpenEditId, setOpenDeleteId,
                          handleAddClick, openEditId, openDeleteId, openAdd, setOpenAdd
                      }) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} maxWidth="lg">
            <Grid item>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Box display='block' justifyContent='center'>
                        <Typography component="h2" variant="h6" color="secondary" style={{
                            display: 'inline-block',
                            textAlign: 'left',
                            float: 'left'
                        }}>
                            Cinemas management
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
                            {cinemasState?.error?.validationErrors?.Cinema ?? ""}
                        </Typography>
                    </Box>
                    <Loading isLoading={cinemasState?.loading}/>

                    <TableContainer>
                        <Table width='auto' aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Country</TableCell>
                                    <TableCell align="center">City</TableCell>
                                    <TableCell align="center">Street</TableCell>
                                    <TableCell align="right"/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    openAdd === true ?
                                        <CinemaCreateRowContainer theme={theme} setOpenAdd={setOpenAdd}/>
                                        : <></>
                                }
                                {
                                    cinemasState?.dataList ?
                                        cinemasState?.dataList?.cinemas?.map((cinema, index) => (
                                            <React.Fragment key={index}>
                                                {
                                                    openEditId === index ?
                                                        <CinemaUpdateRowContainer
                                                            cinema={cinema} index={index}
                                                            setOpenEditId={setOpenEditId} theme={theme}
                                                        /> :
                                                        <CinemaRowContainer cinema={cinema} index={index}
                                                                            openEditId={openEditId}
                                                                            setOpenEditId={setOpenEditId}
                                                                            openDeleteId={openDeleteId}
                                                                            setOpenDeleteId={setOpenDeleteId}
                                                                            theme={theme} openAdd={openAdd}
                                                        />
                                                }
                                            </React.Fragment>
                                        )) : <></>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Container>
    )
}

export default CinemasTable;