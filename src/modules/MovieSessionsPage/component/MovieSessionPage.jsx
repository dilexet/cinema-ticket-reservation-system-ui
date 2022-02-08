import React from 'react'
import {Box, Container, Divider, Grid, Paper} from "@mui/material";
import '../styles/style.css';
import MovieSessionPageHeader from "./MovieSessionPageHeader";
import MovieSessionPageLeftContent from "./MovieSessionPageLeftContent";
import SessionsList from "./SessionsList";
import MovieSessionPageRightContent from "./MovieSessionPageRightContent";

const MovieSessionPage = ({theme, sessionState, handleClose}) => {
    return (
        <Container component="main" sx={{mt: 2, mb: 2}} style={{minHeight: '1000px'}}>
            <Grid item>
                <Paper sx={{p: 2}} style={{
                    minWidth: '1240px',
                    background: theme.palette.mode === 'dark' ? "#27272A" : "#FFFFFF",
                    border: "none",
                    boxShadow: 'none'
                }}>
                    <MovieSessionPageHeader theme={theme} sessionState={sessionState} handleClose={handleClose}/>
                    <Divider/>
                    <Box
                        style={{
                            display: 'flex', margin: '60px 0',
                        }}>
                        <Box style={{
                            flex: '1 1 auto', boxSizing: 'border-box',

                        }}>
                            <MovieSessionPageLeftContent theme={theme}
                                                         movie={sessionState?.dataList?.movie}/>
                            <SessionsList theme={theme} sessionState={sessionState}/>
                        </Box>
                        <MovieSessionPageRightContent theme={theme}
                                                      movie={sessionState?.dataList?.movie}/>
                    </Box>
                </Paper>
            </Grid>
        </Container>
    )
}

export default MovieSessionPage;