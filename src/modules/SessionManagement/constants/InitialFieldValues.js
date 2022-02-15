import moment from "moment";

export const InitialSessionFieldValues = {
    startDate: moment(Date.now()).format('YYYY-MM-DDTHH:mm:ss'),
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

export const InitialSessionsSeatFieldValues = {
    seatType: '',
    price: 0,
}