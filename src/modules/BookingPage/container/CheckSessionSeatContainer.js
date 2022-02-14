import React from 'react'
import CheckSessionSeat from "../component/CheckSessionSeat";

const CheckSessionSeatContainer = ({theme, seatId, session, handleSelectSeat, handleCancelSelectSeat, selectedSeats}) => {
    const [sessionSeat, setSessionSeat] = React.useState(null)
    const [seatIsBooked, setSeatIsBooked] = React.useState(null)

    React.useEffect(() => {
        const seatIsBooked = selectedSeats.find(el => el.seat.id === seatId)
        if (seatIsBooked) {
            setSeatIsBooked(seatIsBooked)
            setSessionSeat(null)
        } else {
            const sessionSeat = session?.sessionSeats?.find(el => el.seat.id === seatId)
            setSessionSeat(sessionSeat)
            setSeatIsBooked(null)
        }
    }, [seatId, selectedSeats, session?.sessionSeats])

    return (
        <CheckSessionSeat seatId={seatId} handleCancelSelectSeat={handleCancelSelectSeat}
                          handleSelectSeat={handleSelectSeat} sessionSeat={sessionSeat}
                          seatIsBooked={seatIsBooked} theme={theme}/>
    )
}

export default CheckSessionSeatContainer;