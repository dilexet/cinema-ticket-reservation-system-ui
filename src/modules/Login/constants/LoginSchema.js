import * as yup from 'yup';

const loginSchema = yup.object({
    Name: yup
        .string()
        .min(5, "Username must be more than 5 characters")
        .max(16, "Username must be less than 16 characters")
        .required('Please enter your username'),
    Password: yup
        .string()
        .min(4, "Password must be more than 4 characters")
        .max(25, "Password must be more than 25 characters")
        .required('Please enter your password')
});

export default loginSchema;