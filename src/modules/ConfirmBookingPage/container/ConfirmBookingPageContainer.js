import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import {getJwtPayload} from "../../Shared/utils/TokenServices";
import ConfirmBookingPage from "../component/ConfirmBookingPage";
import {OrderInitialValues} from "../constants/OrderInitialValues";
import {bookingTickets} from '../store/action-creator/ConfirmBookingActions'

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

    React.useEffect(() => {
        if (isLoading === true) {
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
                    UserProfileId: UserProfileId,
                    SessionSeatsId: seatsId,
                    SessionAdditionalServicesId: servicesId
                })
            } else {
                navigate('/login')
            }

            setIsLoading(false)
        }
    }, [state, sessionId, isLoading, navigate])

    const handleConfirmOrder = async () => {
        await dispatch(await bookingTickets(sessionId, bookedTickets))
        navigate(`/afisha`)
    }

    const handleClose = () => {
        navigate(`/afisha/movieId=${movieId}/sessionId=${sessionId}`)
    }

    if (isLoading === true || confirmBookingState?.loading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <ConfirmBookingPage theme={theme} handleConfirmOrder={handleConfirmOrder}
                                handleClose={handleClose} bookingState={bookingState}
                                totalPrice={state.totalPrice} selectedSeats={state?.selectedSeats}
                                selectedAdditionalServices={state?.selectedAdditionalServices}
            />
        )
    }
}

export default ConfirmBookingPageContainer;