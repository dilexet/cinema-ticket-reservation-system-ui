import * as yup from 'yup';
import moment from "moment";

const min = moment(new Date(Date.now() - (365 * 24 * 60 * 60 * 1000))).format('yyyy-MM-DD');
const max = moment(new Date(Date.now() + (365 * 24 * 60 * 60 * 1000))).format('yyyy-MM-DD');

const movieSchema = yup.object({
    Name: yup
        .string()
        .required('Please enter Movie name'),
    StartDate: yup
        .date()
        .min(min, `Start date should be equal or later than ${min}`)
        .max(max, `Start date should be equal or earlier than ${max}`)
        .required('Please enter Start date'),
    EndDate: yup
        .date()
        .when("StartDate", (startDate, schema) => {
            if (startDate) {
                const minEndDate = moment(new Date(startDate + (24 * 60 * 60 * 1000))).format('yyyy-MM-DD');
                return schema.min(minEndDate, `End date should be later than ${minEndDate}`)
            }
            return schema;
        })
        .required('Please enter End date'),
    ReleaseDate: yup
        .date()
        .min(min, `Start date should be equal or later than ${min}`)
        .max(max, `Start date should be equal or earlier than ${max}`)
        .required('Please enter Release date'),
    Description: yup
        .string()
        .required('Please enter Description'),
    Countries: yup
        .string()
        .matches('^((\\s*[A-Za-zА-Яа-я]+\\s*)+(,|$))+$', "Countries must be written in the format: USA, Russia")
        .required('Please enter Countries'),
    Genres: yup
        .string()
        .matches('^((\\s*[A-Za-zА-Яа-я]+\\s*)+(,|$))+$', "Genres must be written in the format: Fantasy, Horror")
        .required('Please enter Genres'),
});

export default movieSchema;