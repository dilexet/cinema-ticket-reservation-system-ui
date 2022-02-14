import React from 'react'
import MovieFilterMenu from "../component/Menu/MovieFilterMenu";

const MovieFilterMenuContainer = ({theme, filter, setFilter}) => {
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
        <MovieFilterMenu theme={theme} filter={filter} setFilter={setFilter}
                         openMovieMenu={openMovieMenu} openCinemaMenu={openCinemaMenu}
                         openCityMenu={openCityMenu} openStartDateMenu={openStartDateMenu}
                         openNumberSeatMenu={openNumberSeatMenu} handleCloseMenu={handleCloseMenu}
                         setOpenMovieMenu={setOpenMovieMenu} setOpenCinemaMenu={setOpenCinemaMenu}
                         setOpenCityMenu={setOpenCityMenu} setOpenStartDateMenu={setOpenStartDateMenu}
                         setOpenNumberSeatMenu={setOpenNumberSeatMenu}
        />
    )
}

export default MovieFilterMenuContainer;