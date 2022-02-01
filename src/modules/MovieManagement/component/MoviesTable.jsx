import React from 'react'
import {
    Box,
    Container,
    Grid,
    IconButton,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Loading from "../../Loading/component/Loading";
import MovieRowContainer from "../container/MovieRowContainer";
import MovieUpdateRowContainer from "../container/MovieUpdateRowContainer";
import MovieCreateRowContainer from "../container/MovieCreateRowContainer";


const MoviesTable = ({
                         theme, moviesState, setOpenEditId, setOpenDeleteId,
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
                            Movies management
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
                            {moviesState?.error?.validationErrors?.Movie ?? ""}
                        </Typography>
                    </Box>
                    <Loading isLoading={moviesState?.loading}/>

                    <TableContainer>
                        <Table width='auto' aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="center">Poster</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Start date</TableCell>
                                    <TableCell align="center">End date</TableCell>
                                    <TableCell align="center">Release year</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Countries</TableCell>
                                    <TableCell align="center">Genres</TableCell>
                                    <TableCell align="right"/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    moviesState?.dataList ?
                                        moviesState?.dataList?.movies?.map((movie, index) => (
                                            <React.Fragment key={index}>
                                                {
                                                    openEditId === index ?
                                                        <MovieUpdateRowContainer
                                                            movie={movie}
                                                            index={index}
                                                            setOpenEditId={setOpenEditId}
                                                            theme={theme}
                                                        /> :
                                                        <MovieRowContainer movie={movie} index={index}
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
                                        <MovieCreateRowContainer theme={theme} setOpenAdd={setOpenAdd}/>
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

export default MoviesTable;