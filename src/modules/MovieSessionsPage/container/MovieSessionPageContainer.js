import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import MovieSessionPage from "../component/MovieSessionPage";
import {getSessionsForMovie} from "../store/action-creator/SessionActions";

const MovieSessionPageContainer = () => {
    const theme = useTheme();
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const sessionState = useSelector((state) => state.sessionManagement);

    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/afisha')
    }

    useEffect(() => {
        async function getSessionsList() {
            await dispatch(await getSessionsForMovie(movieId));
            setIsLoading(false)
        }

        if (isLoading === true && movieId) {
            getSessionsList()
        }

    }, [dispatch, isLoading, movieId]);

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <MovieSessionPage theme={theme} sessionState={sessionState} handleClose={handleClose}/>
        )
    }
}

export default MovieSessionPageContainer;