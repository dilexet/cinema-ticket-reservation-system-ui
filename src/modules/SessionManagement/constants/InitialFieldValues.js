import moment from "moment";

export const InitialSessionFieldValues = {
    startDate: moment(new Date(Date.now())).format('YYYY-MM-DDTHH:mm:ss'),
    movieId: "",
    cinemaId: "",
    hallId: "",
    sessionAdditionalServices: [{
        name: '',
        price: 0,
    }],
    sessionSeatTypes: [{
        seatType: '',
        price: 0,
    }]
}

export const InitialSessionAdditionalServiceFieldValues = {
    name: '',
    price: 0,
}

export const InitialSessionsSeatFieldValues = {
    seatType: '',
    price: 0,
}