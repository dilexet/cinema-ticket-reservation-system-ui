import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {Box, Grid, IconButton, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {Search} from "../../TopAppBar/constants/SearchStyled";
import {ApiKey} from "../constants/GoogleApiKey";

const Map = ({currentPosition, onSetMarker, marker, search, handleSearchChange, handleSubmitSearch}) => {
    return (
        <>
            <Box style={{
                margin: '20px 0'
            }}>
                <Search
                    style={{
                        background: 'rgb(180, 180, 180)',
                        width: '50%'
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={1}>
                            <IconButton onClick={handleSubmitSearch} size='small' style={{
                                margin: '0 10px'
                            }}>
                                <SearchIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={11}>
                            <InputBase value={search} onChange={handleSearchChange} style={{
                                width: '100%',
                                padding: '5px 10px',
                            }}
                                       placeholder="Search…"
                                       inputProps={{'aria-label': 'search'}}
                            />
                        </Grid>
                    </Grid>
                </Search>
            </Box>
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
        </>
    )
}

export default Map;