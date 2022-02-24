import React, {useEffect, useState} from 'react';
import moment from "moment";
import StartDateMenu from "../component/Menu/StartDateMenu";

const StartDateMenuContainer = ({open, filter, setFilter}) => {
    const [isLoading, setIsLoading] = useState(true);

    const [dates, setDates] = useState([])

    const handleDateChange = (date) => {
        setFilter({...filter, StartDate: date})
    }

    useEffect(() => {
        if (isLoading === true) {
            const startDate = moment(Date.now());
            const endDate = moment(Date.now()).add(14, 'days');
            let dates = []
            for (let date = startDate; date < endDate; date = date.add(1, 'days')) {
                dates.push(moment(date).format('dddd, MMMM DD'))
            }
            setDates(dates)
            setIsLoading(false)
        }
    }, [dates, isLoading]);


    return (
        <StartDateMenu open={open} filter={filter} dates={dates}
                       handleDateChange={handleDateChange}/>
    )
}

export default StartDateMenuContainer;