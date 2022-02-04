import React from "react"
import {Avatar, Box, TableCell, TableRow} from "@mui/material";
import {toDateString} from "../../Shared/utils/DateConverter";
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
                <Box component="div" sx={{margin: 0, padding: 0, display: "flex", justifyContent: "center"}}>
                    <Avatar alt="poster" src={`${movie?.posterUrl}`}/>
                </Box>
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
                {toDateString(movie.movieDescription.releaseDate)}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.movieDescription.description}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.movieDescription.countries.join(`, `)}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                {movie.movieDescription.genres.join(`, `)}
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