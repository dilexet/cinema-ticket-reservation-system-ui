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

export const handleServicesError = (state, errors, index) => {
    if (errors?.sessionAdditionalServices && errors?.sessionAdditionalServices[index]?.price) {
        return (((errors?.sessionAdditionalServices[index]?.price) && {
            error: true, helperText: errors?.sessionAdditionalServices[index]?.price
        }))
    } else if (state?.error?.validationErrors &&
        state?.error?.validationErrors?.SessionRequest?.sessionAdditionalServices[index]?.price) {
        return ((state?.error?.validationErrors?.SessionRequest?.sessionAdditionalServices[index]?.price && {
            error: true,
            helperText: state?.error?.validationErrors?.SessionRequest?.sessionAdditionalServices[index]?.price
        }))
    }
}

export const handleSessionSeatsTypeError = (state, errors, index) => {
    if (errors?.sessionSeatTypes && errors?.sessionSeatTypes[index]?.price) {
        return (((errors?.sessionSeatTypes[index]?.price) && {
            error: true, helperText: errors?.sessionSeatTypes[index]?.price
        }))
    } else if (state?.error?.validationErrors &&
        state?.error?.validationErrors?.SessionRequest?.sessionSeatTypes[index]?.price) {
        return ((state?.error?.validationErrors?.SessionRequest?.sessionSeatTypes[index]?.price && {
            error: true,
            helperText: state?.error?.validationErrors?.SessionRequest?.sessionSeatTypes[index]?.price
        }))
    }
}

export const handleRowsError = (state, errors, index) => {
    if (errors?.rows && errors?.rows[index]?.numberRow) {
        return (((errors?.rows[index]?.numberRow) && {
            error: true, helperText: errors?.rows[index]?.numberRow
        }))
    } else if (state?.error?.validationErrors && state?.error?.validationErrors?.HallRequest?.rows[index]?.numberRow) {
        return ((state?.error?.validationErrors?.HallRequest?.rows[index].numberRow && {
            error: true, helperText: state?.error?.validationErrors?.HallRequest?.rows[index].numberRow
        }))
    }
}

export const handleSeatsTypeError = (state, errors, indexRow, index) => {
    if (
        errors?.rows &&
        errors?.rows[indexRow]?.seats &&
        errors?.rows[indexRow]?.seats[index]?.seatType) {
        return ((errors?.rows[indexRow].seats[index].seatType && {
            error: true, helperText: errors?.rows[indexRow].seats[index].seatType
        }))
    } else if (
        state?.error?.validationErrors &&
        state?.error?.validationErrors?.HallRequest?.rows &&
        state?.error?.validationErrors?.HallRequest?.rows[indexRow]?.seats &&
        state?.error?.validationErrors?.HallRequest?.rows[indexRow]?.seats[index]?.seatType) {
        return ((state?.error?.validationErrors.HallRequest.rows[indexRow].seats[index].seatType && {
            error: true, helperText: state?.error?.validationErrors.HallRequest.rows[indexRow].seats[index].seatType
        }))
    }
}

export const handleSeatsNumberError = (state, errors, indexRow, index) => {
    if (
        errors?.rows &&
        errors?.rows[indexRow]?.seats &&
        errors?.rows[indexRow]?.seats[index]?.numberSeat) {
        return ((errors?.rows[indexRow].seats[index].numberSeat && {
            error: true, helperText: errors?.rows[indexRow].seats[index].numberSeat
        }))
    } else if (
        state?.error?.validationErrors &&
        state?.error?.validationErrors[`HallRequest.Rows[${indexRow}].Seats`]) {
        return ((state?.error?.validationErrors[`HallRequest.Rows[${indexRow}].Seats`] && {
            error: true,
            helperText: state?.error?.validationErrors[`HallRequest.Rows[${indexRow}].Seats`]
        }))
    }
}

export default handleErrorService;