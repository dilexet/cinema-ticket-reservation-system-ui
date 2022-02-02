import React from 'react'
import CollapsibleSessionAddServicesTableChange from "../../component/Shared/CollapsibleSessionAddServicesTableChange";

const CollapsibleSessionAddServicesTableUpdateContainer = ({
                                                               openRows,
                                                               errors,
                                                               touched,
                                                               handleChange,
                                                               handleBlur,
                                                               values,
                                                               setFieldValue,
                                                               sessionState
                                                           }) => {
    return (
        <CollapsibleSessionAddServicesTableChange
            openRows={openRows}
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            sessionManagementState={sessionState}
        />
    )
}

export default CollapsibleSessionAddServicesTableUpdateContainer;