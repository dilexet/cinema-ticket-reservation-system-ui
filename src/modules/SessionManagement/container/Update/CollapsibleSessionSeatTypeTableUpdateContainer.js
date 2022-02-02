import React from 'react'
import CollapsibleSessionSeatTypeTableChange from "../../component/Shared/CollapsibleSessionSeatTypeTableChange";

const CollapsibleSessionSeatTypeTableUpdateContainer = ({
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
        <CollapsibleSessionSeatTypeTableChange
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

export default CollapsibleSessionSeatTypeTableUpdateContainer;