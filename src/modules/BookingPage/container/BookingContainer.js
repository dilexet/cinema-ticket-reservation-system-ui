import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useTimer} from 'react-timer-hook';
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

    const time = new Date();
    time.setSeconds(time.getSeconds() + 900);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        restart,
    } = useTimer({expiryTimestamp: time, autoStart: false, onExpire: async () => await handleCancelAllSelectedSeat()});

    const handleSelectSeat = async (seatId) => {
        if (connection) {
            try {
                await connection.send('setBlockedSeat', seatId);
                const sessionSeat = bookingState?.sessionState?.session?.sessionSeats?.find(el => el.seat.id === seatId)

                if (selectedSeats.length === 0) {
                    start();
                }

                setSelectedSeats([...selectedSeats, sessionSeat])
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("no connection")
        }
    }

    const handleCancelAllSelectedSeat = async () => {
        if (connection) {
            for (const value of selectedSeats) {
                await connection.send('cancelBlockedSeat', value?.seat?.id);
            }
        }
        setSelectedSeats([])
    }

    const handleCancelSelectSeat = async (seatId) => {
        if (connection) {
            try {
                await connection.send('cancelBlockedSeat', seatId);

                if (selectedSeats.length <= 1) {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 900);
                    restart(time, false);
                }

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
                         connection={connection} minutes={minutes} seconds={seconds} isRunning={isRunning}
            />
        )
    }
}

export default BookingContainer;