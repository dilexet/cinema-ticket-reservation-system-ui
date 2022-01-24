export const toDateString = (date) => {
    const dateParse = Date.parse(date);
    if (dateParse !== null) {
        return new Date(dateParse).toDateString();
    } else {
        return "";
    }
}