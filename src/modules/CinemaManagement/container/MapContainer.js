import React from 'react'
import Geocode from "react-geocode";
import {defaultLocation} from "../constants/DefaultLocation";
import Map from "../component/Map";
import {ApiKey} from "../constants/GoogleApiKey";
import Loading from "../../Loading/component/Loading";

const MapContainer = ({setFieldValue, latitude, longitude}) => {
    const [currentPosition, setCurrentPosition] = React.useState(defaultLocation);
    const [isLoading, setIsLoading] = React.useState(true);

    const [search, setSearch] = React.useState('');

    const [marker, setMarker] = React.useState(parseFloat(latitude) && parseFloat(longitude) ? {
        lat: parseFloat(latitude), lng: parseFloat(longitude)
    } : null)

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude, lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    const error = () => {
        setCurrentPosition(defaultLocation);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearch(value)
    }

    const handleSubmitSearch = () => {
        if (search) {
            Geocode.fromAddress(search).then(
                (response) => {
                    const {lat, lng} = response.results[0].geometry.location;
                    setMarker({
                        lat: lat,
                        lng: lng
                    })
                    setCurrentPosition({
                        lat: lat,
                        lng: lng
                    })
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }

    const onSetMarker = (e) => {
        setMarker({
            lat: e.latLng.lat(), lng: e.latLng.lng()
        });
    }

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    React.useEffect(() => {
        if (isLoading === true) {
            Geocode.setApiKey(ApiKey);
            Geocode.setLanguage("en");
            Geocode.setRegion("es");
            Geocode.setLocationType("ROOFTOP");
            setIsLoading(false)
        }
    }, [isLoading])

    React.useEffect(() => {
        if (marker) {
            console.log(marker)
            Geocode.fromLatLng(marker.lat, marker.lng).then((response) => {
                const location = response.results[0];
                const Address = {
                    Country: '', City: '', Street: '', StreetNumber: ''
                }
                location?.address_components?.forEach((address => {
                    address.types?.forEach((type => {
                        switch (type) {
                            case "country":
                                Address.Country = address.long_name
                                break;
                            case "locality":
                                Address.City = address.long_name
                                break;
                            case "route":
                                Address.Street = address.long_name
                                break;
                            case "street_number":
                                Address.StreetNumber = address.long_name
                                break;
                            default:
                                break;
                        }
                    }))
                }))
                if (Address.Country && Address.City && Address.Street && Address.StreetNumber) {
                    setFieldValue('Country', Address.Country)
                    setFieldValue('City', Address.City)
                    setFieldValue('Street', `${Address.Street}, ${Address.StreetNumber}`)
                    setFieldValue('Latitude', marker.lat)
                    setFieldValue('Longitude', marker.lng)
                }
            }, (error) => {
                console.error(error);
            });
        }
    }, [marker, setFieldValue])

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <Map currentPosition={currentPosition} marker={marker} onSetMarker={onSetMarker}
                 search={search} handleSearchChange={handleSearchChange} handleSubmitSearch={handleSubmitSearch}
            />
        )
    }
}

export default MapContainer;