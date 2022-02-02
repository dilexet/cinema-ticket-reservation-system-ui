import * as yup from 'yup';
import moment from "moment";

const min = moment(Date.now()).format('yyyy-MM-DD');

const sessionAddServiceSchema = yup.object({
    name: yup
        .string()
        .required('Please choose Additional service'),
    price: yup
        .number()
        .min(0.01, "Price seat must be more than 0.01")
        .required("Please enter Price"),
})

const sessionSeatSchema = yup.object({
    seatType: yup
        .string()
        .required('Please choose Seat type'),
    price: yup
        .number()
        .min(0.01, "Price seat must be more than 0.01")
        .required("Please enter Price"),
})

const sessionSchema = yup.object({
    startDate: yup
        .date()
        .min(min, `Start date should be equal or later than ${min}`)
        .required('Please enter Start date'),
    movieId: yup
        .string()
        .required('Please choose Movie'),
    cinemaId: yup
        .string()
        .required('Please choose Cinema'),
    hallId: yup
        .string()
        .required('Please choose Hall'),
    sessionAdditionalServices: yup.array().of(sessionAddServiceSchema),
    sessionSeatTypes: yup.array().of(sessionSeatSchema)
});


export default sessionSchema;