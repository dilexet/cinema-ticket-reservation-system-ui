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

    const initializeAdditionalServices = () => {
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

    React.useEffect(() => {
        if (values.cinemaId !== '' && serviceState?.dataList?.additionalServices?.length > 0) {
            initializeAdditionalServices();
        }
    }, [serviceState?.dataList?.additionalServices, values.cinemaId])


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