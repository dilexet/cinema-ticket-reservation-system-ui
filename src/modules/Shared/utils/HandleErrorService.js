const handleErrorService = (state, errors, touched, name, field) => {
    if (errors[name] && touched[name]) {
        return (
            ((errors[name] && touched[name]) && {
                error: true,
                helperText: errors[name]
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