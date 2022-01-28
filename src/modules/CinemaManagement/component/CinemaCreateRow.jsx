import React from 'react'
import {InitialCinemaFieldValues} from "../constants/InitialFieldValues";
import CinemaForm from "./CinemaForm";

const CinemaCreateRow = ({
                             theme, cinemaManagementState,
                             handleSubmitCreateClick, handleCloseClick
                         }) => {
    return (
        <CinemaForm
            theme={theme} handleSubmit={handleSubmitCreateClick}
            handleCloseClick={handleCloseClick}
            state={cinemaManagementState} initialValues={InitialCinemaFieldValues}
        />
    )
}

export default CinemaCreateRow;