import React, {useState} from 'react'
import CollapsibleSeatTableCreate from "../../component/Create/CollapsibleSeatTableCreate";
import {useSelector} from "react-redux";
import {InitialSeatFieldValues} from "../../constants/InitialFieldValues";

const CollapsibleSeatTableCreateContainer = ({
                                                 indexRow,
                                                 values,
                                                 handleChange,
                                                 handleBlur,
                                                 errors,
                                                 touched,
                                                 openSeats
                                             }) => {
    const hallState = useSelector((state) => state.hallManagement);
    const seatTypeState = useSelector((state) => state.seatTypes);

    const [numberSeats, setNumberSeats] = useState([0]);

    const handleAddClick = () => {
        ++values.Rows[indexRow].NumberOfSeats
        setNumberSeats(numberSeats => [...numberSeats, numberSeats.length])
        values.Rows[indexRow].Seats.push(InitialSeatFieldValues)
    }

    const handleRemoveClick = () => {
        if (numberSeats.length !== 1) {
            --values.Rows[indexRow].NumberOfSeats
            setNumberSeats(numberSeats => numberSeats.filter(x => x !== numberSeats.length - 1))
            values.Rows[indexRow].Seats.pop()

        }
    }
    return (
        <CollapsibleSeatTableCreate
            indexRow={indexRow}
            numberSeats={numberSeats}
            openSeats={openSeats}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
            hallManagementState={hallState}
            seatTypeState={seatTypeState}
        />
    )
}

export default CollapsibleSeatTableCreateContainer;