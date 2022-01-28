import * as yup from 'yup';

const seatSchema = yup.object({
    numberSeat: yup
        .number()
        .min(1, "Number seat must be more than 1")
        .integer("Number seat must be integer")
        .required("Please enter Number seat"),
    seatType: yup
        .string()
        .required("Please choose Seat type")
})

const rowSchema = yup.object({
    numberRow: yup
        .number()
        .min(1, "Number row must be more than 1")
        .integer("Number row must be integer")
        .required("Please enter Number row"),
    seats: yup.array().of(seatSchema)
})

const hallSchema = yup.object({
    name: yup
        .string()
        .required('Please enter Hall name'),
    cinemaId: yup
        .string()
        .required('Please choose Cinema'),
    rows: yup
        .array().of(rowSchema)
});


export default hallSchema;