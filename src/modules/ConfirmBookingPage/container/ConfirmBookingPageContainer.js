import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import {getJwtPayload} from "../../Shared/utils/TokenServices";
import ConfirmBookingPage from "../component/ConfirmBookingPage";
import {OrderInitialValues} from "../constants/OrderInitialValues";
import {bookingTickets} from '../store/action-creator/ConfirmBookingActions'
import {getSessionById} from "../../BookingPage/store/action-creator/BookingActions";
import {useTimer} from "react-timer-hook";

const ConfirmBookingPageContainer = () => {
    const theme = useTheme();
    const {sessionId, movieId} = useParams();
    const {state} = useLocation();
    const navigate = useNavigate();

    const bookingState = useSelector((state) => state.booking);
    const confirmBookingState = useSelector((state) => state.confirmBooking);
    const dispatch = useDispatch();

    const [bookedTickets, setBookedTickets] = React.useState(OrderInitialValues)
    const [isLoading, setIsLoading] = React.useState(true)


    const time = new Date();
    time.setSeconds(time.getSeconds() + (state?.minutes * 60 + state?.seconds));

    const handleClose = () => {
        navigate(`/afisha/movieId=${movieId}/sessionId=${sessionId}`)
    }

    const {
        seconds, minutes, isRunning
    } = useTimer({expiryTimestamp: time, autoStart: true, onExpire: () => handleClose()});


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
    }, [state, sessionId, isLoading, navigate, dispatch])

    const handleConfirmOrder = async () => {
        await dispatch(await bookingTickets(sessionId, bookedTickets))
        navigate(`/afisha`)
    }


    if (isLoading === true || confirmBookingState?.loading === true) {
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