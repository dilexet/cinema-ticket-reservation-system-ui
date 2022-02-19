import * as yup from 'yup';

const cinemaSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Cinema name'),
    Country: yup
        .string()
        .required('Please enter Country'),
    City: yup
        .string()
        .required('Please enter City'),
    Street: yup
        .string()
        .required('Please enter Street'),
});

export default cinemaSchema;