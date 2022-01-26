import React from 'react'
import MovieForm from "./MovieForm";

const MovieUpdateRow = ({
                            index, theme, initialValues,
                            handleSubmitEditClick,
                            handleCloseClick, movieState,
                            uploadImageState
                        }) => {
    return (
        <MovieForm
            theme={theme} state={movieState} handleSubmit={handleSubmitEditClick}
            handleCloseClick={handleCloseClick} uploadImageState={uploadImageState}
            initialValues={initialValues} isCreate={false} index={index}
        />
    )
}

export default MovieUpdateRow;