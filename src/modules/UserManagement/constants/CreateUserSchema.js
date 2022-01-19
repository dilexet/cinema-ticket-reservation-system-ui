import * as yup from 'yup';

const createUserSchema = yup.object({
    Email: yup
        .string()
        .email("The Email field is not a valid")
        .required('Please enter your email'),
    Name: yup
        .string()
        .min(5, "Username must be more than 5 characters")
        .max(16, "Username must be less than 16 characters")
        .required('Please enter your username'),
    RoleName: yup
        .string()
        .required('Please enter your username'),
    Password: yup
        .string()
        .min(4, "Password must be more than 4 characters")
        .max(25, "Password must be more than 25 characters")
        .required('Please enter your password'),
    ConfirmPassword: yup
        .string()
        .oneOf([yup.ref("Password"), null], "The password and confirm password do not match")
        .required('Please confirm your password')
});

export default createUserSchema;