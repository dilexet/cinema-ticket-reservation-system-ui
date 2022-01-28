import React from 'react'
import CinemaForm from "./CinemaForm";

const CinemaUpdateRow = ({
                             index, theme, initialValues,
                             handleSubmitEditClick,
                             handleCloseClick, cinemaManagementState
                         }) => {
    return (
        <CinemaForm
            index={index} theme={theme} initialValues={initialValues}
            handleCloseClick={handleCloseClick} state={cinemaManagementState}
            handleSubmit={handleSubmitEditClick}
        />
    )
}

export default CinemaUpdateRow;