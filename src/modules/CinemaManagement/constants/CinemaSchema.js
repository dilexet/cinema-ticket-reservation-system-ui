import * as yup from 'yup';

const cinemaSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Cinema name'),
    CityName: yup
        .string()
        .required('Please enter City name'),
    Street: yup
        .string()
        .required('Please enter Street'),
});

export default cinemaSchema;