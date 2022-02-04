import React from 'react'
import {useParams} from "react-router-dom";

const MovieSessionPage = ({...props}) => {
    const {movieId} = useParams();
    console.log(props)
    console.log(movieId)
    return (
        <div>
            <h1>
                Test
            </h1>
        </div>
    )
}

export default MovieSessionPage;