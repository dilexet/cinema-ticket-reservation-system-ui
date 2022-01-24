import React from "react"
import {Avatar, TableCell, TableRow} from "@mui/material";
import {toDateString} from "../../Shared/utils/DateConverter";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import DeleteButtonGroup from "../../Shared/components/DeleteButtonGroup";
import RowActionsButtonGroup from "../../Shared/components/RowActionsButtonGroup";

const MovieRow = ({
                      index, movie, theme, isDisable, openDeleteId,
                      handleSubmitDeleteClick, handleCloseClick,
                      handleEditClick, handleDeleteClick
                  }) => {
    return (
        <TableRow
            key={index}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
            style={{
                backgroundColor: isDisable ? theme.palette.grey[900] : theme.palette.grey[1000]
            }}
        >
            <TableCell component="th" scope="row" align="left">
                {index + 1}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                <Avatar alt="poster" src={`${BaseURL}${movie?.posterUrl}`}/>
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.name}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {toDateString(movie.startDate)}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {toDateString(movie.endDate)}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {toDateString(movie.movieDescriptionViewModel.releaseDate)}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.movieDescriptionViewModel.description}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.movieDescriptionViewModel.countries.join(`, `)}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.movieDescriptionViewModel.genres.join(`, `)}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
                {openDeleteId === index ?
                    <DeleteButtonGroup
                        theme={theme}
                        handleSubmitDeleteClick={handleSubmitDeleteClick}
                        handleCloseClick={handleCloseClick}
                    /> :
                    <RowActionsButtonGroup
                        theme={theme}
                        handleDeleteClick={handleDeleteClick}
                        handleEditClick={handleEditClick}
                        isDisable={isDisable}
                    />

                }
            </TableCell>
        </TableRow>
    )
}

export default MovieRow;