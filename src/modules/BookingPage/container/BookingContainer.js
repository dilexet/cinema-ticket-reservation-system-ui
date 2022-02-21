import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useTimer} from 'react-timer-hook';
import {useTheme} from "@mui/material";
import {HubConnectionBuilder} from "@microsoft/signalr";
import Loading from "../../Loading/component/Loading";
import {HubURL} from "../../Shared/constants/BaseURLs";
import BookingPage from "../component/BookingPage";
import {blockTicket, cancelBlockTicket, getSessionById} from "../store/action-creator/BookingActions";
import {timerSeconds} from "../constants/TimerSeconds";

const BookingContainer = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookingState = useSelector((state) => state.booking);
    const {movieId, sessionId} = useParams();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSeats, setSelectedSeats] = React.useState(cookie.SelectedSeats === undefined ? [] : cookie.SelectedSeats);
    const [connection, setConnection] = useState(null);

    const getTimerSettings = () => {
        if (selectedSeats.length <= 0) {
            sessionStorage.setItem('timer', null)
            const time = new Date();
            time.setSeconds(time.getSeconds() + timerSeconds);
            return {
                expiryTimestamp: time,
                autoStart: false,
            }
        }
        const timer = sessionStorage.getItem('timer');
        if (timer) {
            const time = new Date(timer);
            return {
                expiryTimestamp: time,
                autoStart: true,
            }
        } else {
            const time = new Date();
            time.setSeconds(time.getSeconds() + timerSeconds);
            return {
                expiryTimestamp: time,
                autoStart: false,
            }
        }
    }

    const {
        seconds,
        minutes,
        isRunning,
        start,
        restart,
    } = useTimer({
        ...getTimerSettings(),
        onExpire: async () => await handleCancelAllSelectedSeat()
    });

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
        removeSeatsCookie()
        setSelectedSeats([])
    }

    const handleCancelSelectSeat = async (seatId) => {
        if (connection) {
            try {
                await connection.send('cancelBlockedSeat', seatId);

                if (selectedSeats.length <= 1) {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + timerSeconds);
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

    const handleClose = async () => {
        await handleCancelAllSelectedSeat()
        navigate(`/afisha/movieId=${movieId}`)
    }

    const removeSeatsCookie = () => {
        if (cookie.SelectedSeats !== undefined) {
            removeCookie('SelectedSeats')
        }
    }

    React.useEffect(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + (minutes * 60 + seconds));
        sessionStorage.setItem('timer', time)
    }, [minutes, seconds])


    React.useEffect(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + (minutes * 60 + seconds));
        setCookie('SelectedSeats', selectedSeats, {
            path: '/',
            expires: time
        });

    }, [minutes, seconds, selectedSeats, setCookie]);

    React.useEffect(() => {
        const getSession = async () => {
            await dispatch(await getSessionById(sessionId))
            setIsLoading(false)
        }
        if (isLoading === true && sessionId) {
            getSession()
        }
    }, [dispatch, isLoading, sessionId])

    React.useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(HubURL)
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
    }, [setConnection])

    React.useEffect(() => {
        if (connection && isLoading === false) {

            connection.start().then(() => {
                console.log("Connected!")

                connection.on("setBlockedSeat", async (seatId) => {
                    await dispatch(blockTicket(seatId))
                })

                connection.on("cancelBlockedSeat", async (seatId) => {
                    await dispatch(cancelBlockTicket(seatId))
                })
            }).catch(e => console.log(e))
        }
    }, [connection, dispatch, isLoading])

    if (isLoading === true || connection === null) {
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