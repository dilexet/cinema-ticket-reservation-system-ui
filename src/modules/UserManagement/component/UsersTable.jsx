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
} from "@mui/material";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import {IconButton} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import UserUpdateRowContainer from "../container/UserUpdateRowContainer";
import UserRowContainer from "../container/UserRowContainer";


const UsersTable = ({
                        theme, usersState, setOpenEditId, setOpenDeleteId,
                        handleAddClick, openEditId, openDeleteId
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
                            Users management
                        </Typography>
                        <IconButton aria-label='edit'
                                    onClick={handleAddClick}
                                    style={{
                                        display: 'inline-block',
                                        textAlign: 'right',
                                        float: 'right',
                                        marginRight: '45px'
                                    }}>
                            <AddCircleIcon style={{fill: theme.palette.success.main}}/>
                        </IconButton>
                    </Box>
                    <Loading isLoading={usersState?.loading}/>

                    <TableContainer>
                        <Table width='auto' aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Role</TableCell>
                                    <TableCell align="right"/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usersState.dataList.users.map((user, index) => (
                                    <React.Fragment key={index}>
                                        {
                                            openEditId === index ?
                                                <UserUpdateRowContainer
                                                    user={user}
                                                    index={index}
                                                    setOpenEditId={setOpenEditId}
                                                    theme={theme}
                                                /> :
                                                <UserRowContainer user={user} index={index}
                                                                  openEditId={openEditId}
                                                                  setOpenEditId={setOpenEditId}
                                                                  openDeleteId={openDeleteId}
                                                                  setOpenDeleteId={setOpenDeleteId}
                                                                  theme={theme}
                                                />
                                        }
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Container>
    );
}

export default UsersTable;