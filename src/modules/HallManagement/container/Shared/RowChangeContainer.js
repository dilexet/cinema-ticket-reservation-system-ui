import React from 'react';
import RowChange from "../../component/Shared/RowChange";

const RowChangeContainer = ({
                                index,
                                values,
                                handleChange,
                                handleBlur,
                                errors,
                                touched,
                                hallManagementState,
                                setFieldValue
                            }) => {
    const [openSeats, setOpenSeats] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (isLoading === true) {
            setIsLoading(false)
            setFieldValue(`rows[${index}].numberRow`, index + 1)
        }
    }, [index, isLoading, setFieldValue])

    return (
        <RowChange
            values={values} errors={errors} touched={touched} handleChange={handleChange}
            hallManagementState={hallManagementState} handleBlur={handleBlur}
            index={index} setOpenSeats={setOpenSeats} openSeats={openSeats} setFieldValue={setFieldValue}/>
    )
}

export default RowChangeContainer;