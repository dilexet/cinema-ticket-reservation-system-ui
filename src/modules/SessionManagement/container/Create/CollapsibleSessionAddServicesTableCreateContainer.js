import React from 'react';
import CollapsibleSessionAddServicesTableChange from "../../component/Shared/CollapsibleSessionAddServicesTableChange";
import {useSelector} from "react-redux";

const CollapsibleSessionAddServicesTableCreateContainer = ({
                                                               openRows,
                                                               errors,
                                                               touched,
                                                               handleChange,
                                                               handleBlur,
                                                               values,
                                                               setFieldValue,
                                                               sessionState
                                                           }) => {
    const serviceState = useSelector((state) => state.additionalServiceManagement);

    React.useEffect(() => {
        if (values.cinemaId !== '' && serviceState?.dataList?.additionalServices?.length > 0) {
            const services = []
            serviceState?.dataList?.additionalServices?.forEach((value) => {
                const service = {
                    'name': value.name,
                    'price': 0
                }
                services.push(service)
            })
            setFieldValue("sessionAdditionalServices", services)
        }
    }, [serviceState?.dataList?.additionalServices, setFieldValue, values.cinemaId])


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

export default CollapsibleSessionAddServicesTableCreateContainer;