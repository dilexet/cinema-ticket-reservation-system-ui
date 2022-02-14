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

    const [selectedSeats, setSelectedSeats] = React.useState([]);
    const [connection, setConnection] = useState(null);

    const handleSelectSeat = async (seatId) => {
        if (connection) {
            try {
                await connection.send('setBlockedSeat', seatId);
                const sessionSeat = bookingState?.sessionState?.session?.sessionSeats?.find(el => el.seat.id === seatId)
                setSelectedSeats([...selectedSeats, sessionSeat])
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("no connection")
        }
    }

    const handleCancelSelectSeat = async (seatId) => {
        if (connection) {
            try {
                await connection.send('cancelBlockedSeat', seatId);
                setSelectedSeats(selectedSeats.filter(x => x.seat.id !== seatId))
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("no connection")
        }
    }

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
            <BookingPage theme={theme} bookingState={bookingState} handleClose={handleClose}
                         selectedSeats={selectedSeats} handleSelectSeat={handleSelectSeat}
                         handleCancelSelectSeat={handleCancelSelectSeat} setConnection={setConnection}
                         connection={connection}
            />
        )
    }
}

export default BookingContainer;