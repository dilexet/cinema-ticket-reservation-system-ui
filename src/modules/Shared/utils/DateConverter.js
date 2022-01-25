import moment from "moment";

export const toDateString = (date) => {
    const parsed = moment(date, 'DD/MM/YYYY')
    if (parsed !== null) {
        return parsed.format('DD/MM/YYYY')
    } else {
        return "";
    }
}

export const toDateStringInputFormat = (date) => {
    const parsed = moment(date, 'DD/MM/yyyy')
    if (parsed !== null) {
        return parsed.format('yyyy-MM-DD')
    } else {
        return "";
    }
}