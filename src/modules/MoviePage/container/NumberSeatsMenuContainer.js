import React from 'react';
import NumberSeatsMenu from "../component/Menu/NumberSeatsMenu";

const NumberSeatsMenuContainer = ({open, filter, setFilter}) => {

    const handleNumberSeatsChange = (event) => {
        if (event.target.value === '') {
            setFilter({...filter, NumberAvailableSeats: 0})
        } else {
            setFilter({...filter, NumberAvailableSeats: event.target.value})
        }
    }

    return (
        <NumberSeatsMenu open={open} filter={filter}
                         handleNumberSeatsChange={handleNumberSeatsChange}/>
    )
}

export default NumberSeatsMenuContainer;