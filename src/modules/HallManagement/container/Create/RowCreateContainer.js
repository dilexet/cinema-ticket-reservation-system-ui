import React from 'react';
import RowCreate from "../../component/Create/RowCreate";

const RowCreateContainer = ({
                                index,
                                values,
                                handleChange,
                                handleBlur,
                                errors,
                                touched,
                                hallManagementState,
                            }) => {
    const [openSeats, setOpenSeats] = React.useState(false);

    return (
        <RowCreate
            values={values} errors={errors} touched={touched} handleChange={handleChange}
            hallManagementState={hallManagementState} handleBlur={handleBlur}
            index={index} setOpenSeats={setOpenSeats} openSeats={openSeats}/>
    )
}

export default RowCreateContainer;