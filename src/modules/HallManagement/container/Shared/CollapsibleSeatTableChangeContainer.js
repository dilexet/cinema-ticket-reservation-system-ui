import React from 'react'
import {useSelector} from "react-redux";
import {InitialSeatFieldValues} from "../../constants/InitialFieldValues";
import CollapsibleSeatTableChange from "../../component/Shared/CollapsibleSeatTableChange";

const CollapsibleSeatTableChangeContainer = ({
                                                 indexRow,
                                                 values,
                                                 handleChange,
                                                 handleBlur,
                                                 errors,
                                                 touched,
                                                 openSeats,
                                                 setFieldValue
                                             }) => {
    const hallState = useSelector((state) => state.hallManagement);
    const seatTypeState = useSelector((state) => state.seatTypes);

    const handleAddClick = () => {
        setFieldValue(`rows[${indexRow}].numberOfSeats`, values.rows[indexRow].numberOfSeats + 1)
        setFieldValue(`rows[${indexRow}].seats`, [...values.rows[indexRow].seats, InitialSeatFieldValues])
    }

    const handleRemoveClick = () => {
        if (values.rows[indexRow].seats.length !== 1) {
            setFieldValue(`rows[${indexRow}].numberOfSeats`, values.rows[indexRow].numberOfSeats - 1)
            setFieldValue(`rows[${indexRow}].seats`, values.rows[indexRow].seats.slice(0, values.rows[indexRow].seats.length - 1))
        }
    }

    return (
        <CollapsibleSeatTableChange
            indexRow={indexRow}
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
            setFieldValue={setFieldValue}
        />
    )
}

export default CollapsibleSeatTableChangeContainer;