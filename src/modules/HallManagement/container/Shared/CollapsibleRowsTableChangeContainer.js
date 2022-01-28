import React from 'react'
import {useSelector} from "react-redux";
import {InitialRowFieldValues} from "../../constants/InitialFieldValues";
import CollapsibleRowsTableChange from "../../component/Shared/CollapsibleRowsTableChange";

const CollapsibleRowsTableChangeContainer = ({
                                                 openRows,
                                                 errors,
                                                 touched,
                                                 handleChange,
                                                 handleBlur,
                                                 values,
                                                 setFieldValue
                                             }) => {
    const hallState = useSelector((state) => state.hallManagement);

    const handleAddClick = () => {
        setFieldValue("numberOfRows", values.numberOfRows + 1)
        setFieldValue("rows", [...values.rows, InitialRowFieldValues])
    }

    const handleRemoveClick = () => {
        if (values.rows.length !== 1) {
            setFieldValue("numberOfRows", values.numberOfRows - 1)
            setFieldValue("rows", values.rows.slice(0, values.rows.length - 1))
        }
    }

    return (
        <CollapsibleRowsTableChange
            setFieldValue={setFieldValue}
            openRows={openRows}
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleAddClick={handleAddClick}
            hallManagementState={hallState}
            handleRemoveClick={handleRemoveClick}
        />
    )
}

export default CollapsibleRowsTableChangeContainer;