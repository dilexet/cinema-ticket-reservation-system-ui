import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useTheme} from "@mui/material";
import {useTimer} from "react-timer-hook";
import {HubConnectionBuilder} from "@microsoft/signalr";
import {useCookies} from "react-cookie";
import Loading from "../../Loading/component/Loading";
import {getJwtPayload} from "../../Shared/utils/TokenServices";
import ConfirmBookingPage from "../component/ConfirmBookingPage";
import {OrderInitialValues} from "../constants/OrderInitialValues";
import {bookingTickets} from '../store/action-creator/ConfirmBookingActions'
import {getSessionById} from "../../BookingPage/store/action-creator/BookingActions";
import {HubURL} from "../../Shared/constants/BaseURLs";

const ConfirmBookingPageContainer = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {state} = useLocation();
    const {sessionId, movieId} = useParams();
    const bookingState = useSelector((state) => state.booking);
    const confirmBookingState = useSelector((state) => state.confirmBooking);
    const [bookedTickets, setBookedTickets] = React.useState(OrderInitialValues)
    const [isLoading, setIsLoading] = React.useState(true)
    const [connection, setConnection] = useState(null);
    const [cookie, , removeCookie] = useCookies();

    const getTimerSettings = () => {
        const timer = sessionStorage.getItem('timer');
        const time = new Date(timer);
        return {
            expiryTimestamp: time,
            autoStart: true,
        }
    }

    const handleClose = useCallback(() => {
        navigate(`/afisha/movieId=${movieId}/sessionId=${sessionId}`)
    }, [movieId, navigate, sessionId])

    const handleCancelAllSelectedSeat = async () => {
        if (connection) {
            for (const value of state?.selectedSeats) {
                await connection.send('cancelBlockedSeat', value?.seat?.id);
            }
        }
        removeSeatsCookie()
        handleClose()
    }

    const removeSeatsCookie = () => {
        if (cookie.SelectedSeats !== undefined) {
            removeCookie('SelectedSeats')
        }
    }

    const handleConfirmOrder = async () => {
        removeSeatsCookie()
        await dispatch(await bookingTickets(sessionId, bookedTickets))
        navigate(`/afisha`)
    }

    const {
        seconds, minutes, isRunning
    } = useTimer({...getTimerSettings(), onExpire: async () => await handleCancelAllSelectedSeat()});

    React.useEffect(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + (minutes * 60 + seconds));
        sessionStorage.setItem('timer', time)
    }, [minutes, seconds])

    React.useEffect(() => {
        const getSession = async () => {
            await dispatch(await getSessionById(sessionId))
        }

        if (isLoading === true) {
            if (state === null) {
                handleClose()
            }
            getSession()
            let seatsId = []
            state?.selectedSeats?.forEach((seat) => {
                seatsId.push(seat.id)
            })
            let servicesId = []
            state?.selectedAdditionalServices?.forEach((service) => {
                servicesId.push(service.id)
            })
            const {UserProfileId} = getJwtPayload();

            if (UserProfileId) {
                setBookedTickets({
                    UserProfileId: UserProfileId, SessionSeatsId: seatsId, SessionAdditionalServicesId: servicesId
                })
            } else {
                navigate('/login')
            }

            setIsLoading(false)
        }
    }, [state, sessionId, isLoading, navigate, dispatch, handleClose])

    React.useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(HubURL)
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
    }, [setConnection])


    React.useEffect(() => {
        if (connection) {
            connection.start().then(() => {
                console.log("Connected!")
            }).catch(e => console.log(e))
        }
    }, [connection])

    if (isLoading === true || confirmBookingState?.loading === true || connection === null) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <ConfirmBookingPage theme={theme} handleConfirmOrder={handleConfirmOrder}
                                handleClose={handleClose} bookingState={bookingState}
                                totalPrice={state.totalPrice} selectedSeats={state?.selectedSeats}
                                selectedAdditionalServices={state?.selectedAdditionalServices}
                                minutes={minutes} seconds={seconds} isRunning={isRunning}
            />
        )
    }
}

export default ConfirmBookingPageContainer;