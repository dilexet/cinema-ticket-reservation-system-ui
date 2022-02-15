import * as yup from 'yup';

const createUserSchema = yup.object({
    Email: yup
        .string()
        .email("The Email field is not a valid")
        .required('Please enter Email'),
    Name: yup
        .string()
        .min(5, "Username must be more than 5 characters")
        .max(16, "Username must be less than 16 characters")
        .required('Please enter Username'),
    RoleId: yup
        .string()
        .required('Please enter Role'),
    Password: yup
        .string()
        .min(4, "Password must be more than 4 characters")
        .max(25, "Password must be more than 25 characters")
        .required('Please enter Password'),
    ConfirmPassword: yup
        .string()
        .oneOf([yup.ref("Password"), null], "The password and confirm password do not match")
        .required('Please confirm password')
});

export default createUserSchema;