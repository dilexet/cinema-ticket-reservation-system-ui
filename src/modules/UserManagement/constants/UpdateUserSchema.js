import * as yup from 'yup';

const updateUserSchema = yup.object({
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
        .required('Please enter Role')
});

export default updateUserSchema;