import React from 'react'
import MovieForm from "./MovieForm";
import {InitialMovieFieldValues} from "../constants/InitialFieldValues";

const MovieCreateRow = ({
                            theme, moviesState,
                            handleSubmitCreateClick, handleCloseClick,
                            uploadImageState
                        }) => {
    return (
        <MovieForm
            theme={theme} state={moviesState} handleSubmit={handleSubmitCreateClick}
            handleCloseClick={handleCloseClick} uploadImageState={uploadImageState}
            initialValues={InitialMovieFieldValues} isCreate={true}
        />
    )
}

export default MovieCreateRow;