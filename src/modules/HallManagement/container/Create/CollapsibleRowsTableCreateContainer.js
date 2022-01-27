import React, {useState} from 'react'
import CollapsibleRowsTableCreate from "../../component/Create/CollapsibleRowsTableCreate";
import {useSelector} from "react-redux";
import {InitialRowFieldValues} from "../../constants/InitialFieldValues";

const CollapsibleRowsTableCreateContainer = ({
                                                 openRows,
                                                 errors,
                                                 touched,
                                                 handleChange,
                                                 handleBlur,
                                                 values,
                                             }) => {
    const hallState = useSelector((state) => state.hallManagement);

    const [numberRows, setNumberRows] = useState([0]);

    const handleAddClick = () => {
        ++values.NumberOfRows
        setNumberRows(numberRows => [...numberRows, numberRows.length])
        values.Rows.push(InitialRowFieldValues)
    }

    const handleRemoveClick = () => {
        if (numberRows.length !== 1) {
            --values.NumberOfRows
            setNumberRows(numberRows => numberRows.filter(x => x !== numberRows.length - 1))
            values.Rows.pop();
        }
    }

    return (
        <CollapsibleRowsTableCreate
            openRows={openRows}
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleAddClick={handleAddClick}
            hallManagementState={hallState}
            numberRows={numberRows}
            handleRemoveClick={handleRemoveClick}
        />
    )
}

export default CollapsibleRowsTableCreateContainer;