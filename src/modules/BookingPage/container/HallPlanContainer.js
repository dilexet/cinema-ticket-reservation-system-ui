import React from 'react'
import HallPlan from "../component/HallPlan";
import {HubConnectionBuilder} from "@microsoft/signalr";
import {HubURL} from "../../Shared/constants/BaseURLs";
import {blockTicket, cancelBlockTicket} from "../store/action-creator/BookingActions";
import {useDispatch} from "react-redux";
import Loading from "../../Loading/component/Loading";

const HallPlanContainer = ({
                               theme, session, selectedSeats, connection,
                               setConnection, handleSelectSeat, handleCancelSelectSeat
                           }) => {
    const dispatch = useDispatch();

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

                connection.on("setBlockedSeat", async (seatId) => {
                    await dispatch(blockTicket(seatId))
                })

                connection.on("cancelBlockedSeat", async (seatId) => {
                    await dispatch(cancelBlockTicket(seatId))
                })
            }).catch(e => console.log(e))
        }
    }, [connection, dispatch])

    if (connection === null) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <HallPlan theme={theme} session={session}
                      selectedSeats={selectedSeats}
                      handleSelectSeat={handleSelectSeat}
                      handleCancelSelectSeat={handleCancelSelectSeat}/>
        )
    }
}

export default HallPlanContainer;