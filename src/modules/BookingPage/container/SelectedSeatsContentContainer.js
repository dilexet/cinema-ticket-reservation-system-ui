import React from 'react'
import {useNavigate} from "react-router-dom";
import SelectedSeatsContent from "../component/SelectedSeatsContent";
import {isAuthorize} from "../../Shared/utils/TokenServices";

const SelectedSeatsContentContainer = ({
                                           theme, session, selectedSeats, handleCancelSelectSeat,
                                           minutes, seconds, isRunning
                                       }) => {
    const [totalPrice, setTotalPrice] = React.useState(0);

    const [selectedAdditionalServices, setSelectedAdditionalServices] = React.useState([])

    const navigate = useNavigate();

    React.useEffect(() => {
        let price = 0
        selectedSeats.forEach((seat) => {
            price = price + seat?.sessionSeatType?.price
        })
        selectedAdditionalServices.forEach((service) => {
            price = price + service?.price
        })
        price = price.toFixed(2)
        setTotalPrice(price)
    }, [selectedAdditionalServices, selectedSeats])


    const handleAddService = (service) => {
        setSelectedAdditionalServices([...selectedAdditionalServices, service])
    }

    const handleRemoveService = (service) => {
        const index = selectedAdditionalServices.indexOf(service)
        if (index > -1) {
            setSelectedAdditionalServices(selectedAdditionalServices.filter((_, i) => i !== index))
        }
    }

    const [openLoginModal, setOpenLoginModal] = React.useState(false);
    const [openRegisterModal, setOpenRegisterModal] = React.useState(false);

    const handleConfirmOrder = async (selectedSeats, selectedAdditionalServices) => {
        const isAuth = await isAuthorize();
        if (isAuth === true) {
            navigate(`/confirm-order/movieId=${session.movie.id}/sessionId=${session.id}`, {
                state: {
                    selectedSeats: selectedSeats,
                    selectedAdditionalServices: selectedAdditionalServices,
                    totalPrice: totalPrice,
                    minutes: minutes,
                    seconds: seconds,
                    isRunning: isRunning
                }
            })
        } else {
            setOpenLoginModal(true)
        }
    }

    return (
        <SelectedSeatsContent theme={theme} session={session} handleCancelSelectSeat={handleCancelSelectSeat}
                              selectedSeats={selectedSeats}
                              selectedAdditionalServices={selectedAdditionalServices}
                              handleAddService={handleAddService} handleRemoveService={handleRemoveService}
                              handleConfirmOrder={handleConfirmOrder} totalPrice={totalPrice}

                              openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}
                              openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal}
        />
    )
}

export default SelectedSeatsContentContainer;