import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {ApiKey} from "../constants/GoogleApiKey";

const Map = ({currentPosition, onSetMarker, marker}) => {
    return (
        <LoadScript googleMapsApiKey={ApiKey}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '50vh'
                }}
                zoom={12}
                center={currentPosition}
                onClick={onSetMarker}
            >
                {
                    marker ?
                        <>
                            <Marker position={marker}/>
                        </>
                        : <></>
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;