import * as yup from 'yup';

const hallSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Hall name'),
    CinemaId: yup
        .string()
        .required('Please choose Cinema'),
});

export default hallSchema;