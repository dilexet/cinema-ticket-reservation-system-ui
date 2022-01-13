const handleErrorService = (state, errors, touched, field) => {
    if (errors[field] && touched[field]) {
        return (
            ((errors[field] && touched[field]) && {
                error: true,
                helperText: errors[field]
            })
        )
    } else if (state?.error?.validationErrors) {
        return (
            (state?.error?.validationErrors[field] && {
                error: true,
                helperText: state?.error?.validationErrors[field]
            })
        )
    }
}

export default handleErrorService;