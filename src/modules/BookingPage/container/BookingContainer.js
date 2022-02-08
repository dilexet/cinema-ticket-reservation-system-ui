import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import BookingPage from "../component/BookingPage";
import {getSessionById} from "../store/action-creator/BookingActions";

const BookingContainer = () => {
    const theme = useTheme();
    const {movieId, sessionId} = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const bookingState = useSelector((state) => state.booking);

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(`/afisha/movieId=${movieId}`)
    }

    React.useEffect(() => {
        const getSession = async () => {
            await dispatch(await getSessionById(sessionId))
            setIsLoading(false)
        }
        if (isLoading === true && sessionId) {
            getSession()
        }
    }, [dispatch, isLoading, sessionId])

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <BookingPage theme={theme} bookingState={bookingState} handleClose={handleClose}/>
        )
    }
}

export default BookingContainer;