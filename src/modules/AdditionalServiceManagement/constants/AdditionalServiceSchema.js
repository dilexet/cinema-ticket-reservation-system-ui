import * as yup from 'yup';

export const creatingAdditionalServiceSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Additional service name'),
    CinemaId: yup
        .string()
        .required('Please choose Cinema'),
});


export const updatingAdditionalServiceSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Additional service name'),
});