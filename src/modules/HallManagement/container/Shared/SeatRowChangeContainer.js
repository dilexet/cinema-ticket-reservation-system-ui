import React from 'react'
import SeatRowChange from "../../component/Shared/SeatRowChange";

const SeatRowChangeContainer = ({
                                 index,
                                 values,
                                 handleChange,
                                 handleBlur,
                                 errors,
                                 touched,
                                 hallManagementState,
                                 seatTypeState,
                                 indexRow,
                                 setFieldValue
                             }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (isLoading === true) {
            setIsLoading(false)
            setFieldValue(`rows[${indexRow}].seats[${index}].numberSeat`, index + 1)
        }
    }, [index, isLoading, setFieldValue])

    return (
        <SeatRowChange
            values={values} errors={errors} touched={touched}
            handleChange={handleChange}
            hallManagementState={hallManagementState}
            seatTypeState={seatTypeState}
            handleBlur={handleBlur}
            index={index} indexRow={indexRow}
        />
    )
}

export default SeatRowChangeContainer;