import React from 'react'
import {
    Box, Container,
    Grid,
    IconButton,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Loading from "../../Loading/component/Loading";
import SessionRowContainer from "../container/Get/SessionRowContainer";
import SessionCreateRowContainer from "../container/Create/SessionCreateRowContainer";

const SessionsTable = ({
                           theme, sessionState, setOpenEditId, setOpenDeleteId,
                           handleAddClick, openEditId, openDeleteId, setOpenAdd, openAdd
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
                            Session management
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
                            {sessionState?.error?.validationErrors?.Session ?? ""}
                        </Typography>
                    </Box>
                    <Loading isLoading={sessionState?.loading}/>

                    <TableContainer>
                        <Table width='auto' aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="left"/>
                                    <TableCell align="center">Cinema name</TableCell>
                                    <TableCell align="center">Hall name</TableCell>
                                    <TableCell align="center">Movie name</TableCell>
                                    <TableCell align="center">Start date</TableCell>
                                    <TableCell align="right"/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    sessionState?.dataList ?
                                        sessionState?.dataList?.sessions?.map((session, index) => (
                                            <React.Fragment key={index}>
                                                {
                                                    // openEditId === index ?
                                                    //     <SessionUpdateRowContainer
                                                    //         hall={hall}
                                                    //         index={index}
                                                    //         setOpenEditId={setOpenEditId}
                                                    //         theme={theme}
                                                    //     /> :
                                                    <SessionRowContainer
                                                        session={session}
                                                        index={index}
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
                                {
                                    openAdd === true ?
                                        <React.Fragment>
                                            <SessionCreateRowContainer theme={theme} setOpenAdd={setOpenAdd}/>
                                        </React.Fragment>
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

export default SessionsTable;