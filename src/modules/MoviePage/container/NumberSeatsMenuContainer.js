import React, {useEffect, useState} from 'react';
import Loading from "../../Loading/component/Loading";
import NumberSeatsMenu from "../component/Menu/NumberSeatsMenu";

const NumberSeatsMenuContainer = ({open, filter, setFilter}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleNumberSeatsChange = (event) => {
        if (event.target.value === '') {
            setFilter({...filter, NumberAvailableSeats: 0})
        } else {
            setFilter({...filter, NumberAvailableSeats: event.target.value})
        }
    }

    useEffect(() => {
        if (isLoading === true) {
            setIsLoading(false)
        }
    }, [isLoading]);

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <NumberSeatsMenu open={open} filter={filter}
                             handleNumberSeatsChange={handleNumberSeatsChange}/>
        )
    }
}

export default NumberSeatsMenuContainer;