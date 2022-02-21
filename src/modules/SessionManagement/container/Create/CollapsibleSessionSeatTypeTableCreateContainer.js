import React from 'react'
import CollapsibleSessionSeatTypeTableChange from "../../component/Shared/CollapsibleSessionSeatTypeTableChange";
import {useSelector} from "react-redux";

const CollapsibleSessionSeatTypeTableCreateContainer = ({
                                                            openRows,
                                                            errors,
                                                            touched,
                                                            handleChange,
                                                            handleBlur,
                                                            values,
                                                            setFieldValue,
                                                            sessionState
                                                        }) => {
    const hallState = useSelector((state) => state.hallManagement);

    React.useEffect(() => {
        if (values.hallId !== '' && hallState?.dataList?.halls?.length > 0) {
            const seatTypes = []
            const hall = hallState?.dataList?.halls?.filter(x => x.id === values.hallId)
            hall[0]?.seatTypes?.forEach((value) => {
                const seatType = {
                    'seatType': value,
                    'price': 0
                }
                seatTypes.push(seatType)
            })
            setFieldValue("sessionSeatTypes", seatTypes)
        }
    }, [hallState?.dataList?.halls, setFieldValue, values.hallId])

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

export default CollapsibleSessionSeatTypeTableCreateContainer;