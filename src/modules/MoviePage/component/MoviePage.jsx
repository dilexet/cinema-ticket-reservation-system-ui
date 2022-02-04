import React from 'react'
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import MovieCard from "./MovieCard";
import MovieFilterMenu from "./Menu/MovieFilterMenu";

const MoviePage = ({theme, moviesState, filterParams, setFilterParams}) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} style={{minHeight: '1000px'}}>
            <Grid item>
                <Paper sx={{p: 2}} style={{
                    minWidth: '1240px',
                    background: theme.palette.mode === 'dark'
                        ? "#27272A"
                        : "#FFFFFF",
                    border: "none",
                    boxShadow: 'none'
                }}>
                    <Box
                        style={{
                            display: 'inline-flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            padding: '35px 0'
                        }}>
                        <Typography variant="h1"
                                    style={{
                                        color: theme.palette.mode === 'dark'
                                            ? "rgba(255, 255, 255, 0.9)"
                                            : "rgba(0, 0, 0, 0.9)",
                                        fontSize: '3.125em',
                                        fontWeight: '700',
                                    }}>
                            Cinema poster
                        </Typography>
                    </Box>
                    <MovieFilterMenu theme={theme} filter={filterParams} setFilter={setFilterParams}/>
                    <Loading isLoading={moviesState?.loading}/>
                    <Box display='block'>
                        <Box style={{
                            display: 'inline-flex',
                            verticalAlign: 'top',
                            flexWrap: 'wrap',
                            width: '100%'
                        }}>
                            {
                                moviesState?.dataList ?
                                    moviesState?.dataList?.movies?.map((movie, index) => (
                                        <Box key={index}
                                             style={{
                                                 display: 'flex',
                                                 textAlign: 'center',
                                                 flexDirection: 'column',
                                                 maxWidth: '325px',
                                                 margin: "40px 0",
                                             }}>
                                            <Box style={{width: '296px'}}>
                                                <MovieCard movie={movie} theme={theme}/>
                                            </Box>
                                        </Box>
                                    )) : <></>
                            }
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Container>
    )
}

export default MoviePage;