import * as yup from "yup";

const userProfileSchema = yup.object({
    name: yup
        .string()
        .min(2, "Name must be more than 2 characters")
        .max(25, "Name must be less than 25 characters")
        .required('Please enter the Name'),
    surname: yup
        .string()
        .min(2, "Surname must be more than 2 characters")
        .max(25, "Surname must be less than 25 characters")
        .required('Please enter the Surname'),
});

export default userProfileSchema;