import React from 'react'
import {useParams} from "react-router-dom";

const BookingPage = () => {
    const {movieId, sessionId} = useParams();

    console.log("movieId = " + movieId)
    console.log("sessionId = " + sessionId)
    return (
        <div>
            <h1>
                BookingPage
            </h1>
        </div>
    )
}

export default BookingPage;