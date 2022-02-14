import React from 'react'
import {useNavigate} from "react-router-dom";
import SelectedSeatsContent from "../component/SelectedSeatsContent";

const SelectedSeatsContentContainer = ({theme, session, selectedSeats, handleCancelSelectSeat}) => {
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

    const handleConfirmOrder = (selectedSeats, selectedAdditionalServices) => {
        navigate(`/confirm-order/movieId=${session.movie.id}/sessionId=${session.id}`, {
            state: {
                selectedSeats: selectedSeats,
                selectedAdditionalServices: selectedAdditionalServices,
                totalPrice: totalPrice
            }
        })
    }

    return (
        <SelectedSeatsContent theme={theme} session={session} handleCancelSelectSeat={handleCancelSelectSeat}
                              selectedSeats={selectedSeats}
                              selectedAdditionalServices={selectedAdditionalServices}
                              handleAddService={handleAddService} handleRemoveService={handleRemoveService}
                              handleConfirmOrder={handleConfirmOrder} totalPrice={totalPrice}/>
    )
}

export default SelectedSeatsContentContainer;