import * as yup from 'yup';

const movieSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Movie name'),
    StartDate: yup
        .string()
        .required('Please enter Start date'),
    EndDate: yup
        .string()
        .required('Please enter End date'),
    ReleaseDate: yup
        .string()
        .required('Please enter Release date'),
    Description: yup
        .string()
        .required('Please enter Description'),
    Countries: yup
        .string()
        .required('Please enter Countries'),
    Genres: yup
        .string()
        .required('Please enter Genres'),
});

export default movieSchema;