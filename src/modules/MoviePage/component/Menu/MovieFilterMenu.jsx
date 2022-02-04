import React from 'react'
import {Box, Typography} from "@mui/material";
import "../../styles/movie_filter_menu_styles.css"
import OpenMenuButton from "./OpenMenuButton";
import MovieMenuContainer from "../../container/MovieMenuContainer";
import CinemaMenuContainer from "../../container/CinemaMenuContainer";
import CityMenuContainer from "../../container/CityMenuContainer";
import StartDateMenuContainer from "../../container/StartDateMenuContainer";
import NumberSeatsMenuContainer from "../../container/NumberSeatsMenuContainer";

const MovieFilterMenu = ({theme, filter, setFilter}) => {
    const [openMovieMenu, setOpenMovieMenu] = React.useState(false);
    const [openCinemaMenu, setOpenCinemaMenu] = React.useState(false);
    const [openCityMenu, setOpenCityMenu] = React.useState(false);
    const [openStartDateMenu, setOpenStartDateMenu] = React.useState(false);
    const [openNumberSeatMenu, setOpenNumberSeatMenu] = React.useState(false);

    const handleCloseMenu = () => {
        setOpenMovieMenu(false)
        setOpenCinemaMenu(false)
        setOpenCityMenu(false)
        setOpenStartDateMenu(false)
        setOpenNumberSeatMenu(false)
    }

    return (
        <Box className='main-box'>

            <Box className='nested-box'>
                <Box className='nested-box-border-right'>
                    <Box className='content-box'>
                        <Box style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            padding: '0 10px',
                            height: '70px'
                        }}>
                            <Typography variant="h1"
                                        style={{
                                            color: theme.palette.mode === 'dark'
                                                ? "rgba(255, 255, 255, 0.9)"
                                                : "rgba(0, 0, 0, 0.9)",
                                            fontSize: '1.375em',
                                            fontWeight: '600',
                                        }}>
                                Movie title
                            </Typography>
                            <OpenMenuButton openMenu={openMovieMenu} setOpenMenu={setOpenMovieMenu}
                                            handleCloseMenu={handleCloseMenu}/>
                        </Box>
                    </Box>
                </Box>
                <MovieMenuContainer open={openMovieMenu} filter={filter} setFilter={setFilter}/>
            </Box>

            <Box className='nested-box'>
                <Box className='nested-box-border-right'>
                    <Box className='content-box'>
                        <Box style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            padding: '0 10px',
                            height: '70px'
                        }}>
                            <Typography variant="h1"
                                        style={{
                                            color: theme.palette.mode === 'dark'
                                                ? "rgba(255, 255, 255, 0.9)"
                                                : "rgba(0, 0, 0, 0.9)",
                                            fontSize: '1.375em',
                                            fontWeight: '600',
                                        }}>
                                Cinema name
                            </Typography>
                            <OpenMenuButton openMenu={openCinemaMenu} setOpenMenu={setOpenCinemaMenu}
                                            handleCloseMenu={handleCloseMenu}/>
                        </Box>
                    </Box>
                </Box>
                <CinemaMenuContainer open={openCinemaMenu} filter={filter} setFilter={setFilter}/>
            </Box>


            <Box className='nested-box'>
                <Box className='nested-box-border-right'>
                    <Box className='content-box'>
                        <Box style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            padding: '0 10px',
                            height: '70px'
                        }}>
                            <Typography variant="h1"
                                        style={{
                                            color: theme.palette.mode === 'dark'
                                                ? "rgba(255, 255, 255, 0.9)"
                                                : "rgba(0, 0, 0, 0.9)",
                                            fontSize: '1.375em',
                                            fontWeight: '600',
                                        }}>
                                City name
                            </Typography>
                            <OpenMenuButton openMenu={openCityMenu} setOpenMenu={setOpenCityMenu}
                                            handleCloseMenu={handleCloseMenu}/>
                        </Box>
                    </Box>
                </Box>
                <CityMenuContainer open={openCityMenu} setFilter={setFilter} filter={filter}/>
            </Box>

            <Box className='nested-box'>
                <Box className='nested-box-border-right'>
                    <Box className='content-box'>
                        <Box style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            padding: '0 10px',
                            height: '70px'
                        }}>
                            <Typography variant="h1"
                                        style={{
                                            color: theme.palette.mode === 'dark'
                                                ? "rgba(255, 255, 255, 0.9)"
                                                : "rgba(0, 0, 0, 0.9)",
                                            fontSize: '1.375em',
                                            fontWeight: '600',
                                        }}>
                                Start date
                            </Typography>
                            <OpenMenuButton openMenu={openStartDateMenu} setOpenMenu={setOpenStartDateMenu}
                                            handleCloseMenu={handleCloseMenu}/>
                        </Box>
                    </Box>
                </Box>
                <StartDateMenuContainer open={openStartDateMenu} filter={filter} setFilter={setFilter}/>
            </Box>

            <Box className='nested-box'>
                <Box>
                    <Box className='content-box'>
                        <Box style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            padding: '0 10px',
                            height: '70px'
                        }}>
                            <Typography variant="h1"
                                        style={{
                                            color: theme.palette.mode === 'dark'
                                                ? "rgba(255, 255, 255, 0.9)"
                                                : "rgba(0, 0, 0, 0.9)",
                                            fontSize: '1.375em',
                                            fontWeight: '600',
                                        }}>
                                Number free seats
                            </Typography>
                            <OpenMenuButton openMenu={openNumberSeatMenu} setOpenMenu={setOpenNumberSeatMenu}
                                            handleCloseMenu={handleCloseMenu}/>
                        </Box>
                    </Box>
                </Box>
                <NumberSeatsMenuContainer open={openNumberSeatMenu} filter={filter} setFilter={setFilter}/>
            </Box>
        </Box>
    )
}

export default MovieFilterMenu;