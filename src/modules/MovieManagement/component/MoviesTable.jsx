import React from 'react'
import UploadImageContainer from "../../UploadImage/container/UploadImageContainer";
import {ImageList, ImageListItem} from "@mui/material";
import {BaseURL} from "../../Shared/constants/BaseURLs";

const MoviesTable = ({uploadImageState}) => {
    return (
        <div>
            <h1>HELLO</h1>
            <UploadImageContainer/>
            <ImageList sx={{width: 1000, height: 950}} cols={3} rowHeight={500}>
                <ImageListItem>
                    <img
                        src={`${BaseURL}${uploadImageState?.data?.posterPath}`}
                        srcSet={`${BaseURL}${uploadImageState?.data?.posterPath}`}
                        alt='image'
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
        </div>
    )
}

export default MoviesTable;