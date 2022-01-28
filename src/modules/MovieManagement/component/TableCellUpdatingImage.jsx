import React from 'react'
import {Avatar, Box, FormHelperText, TableCell} from "@mui/material";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import UploadImageContainer from "../../UploadImage/container/UploadImageContainer";

const TableCellUpdatingImage = ({uploadImageState, values, theme, movieState}) => {
    return (
        <TableCell component="th" scope="row" align="center">
            <Box component="div" sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {
                    uploadImageState?.data === null && values.PosterUrl !== null ?
                        <Avatar alt="Poster" src={`${values.PosterUrl}`}/> :
                        <Avatar alt="Poster" src={`${BaseURL}${uploadImageState?.data?.posterPath}`}/>
                }
                <UploadImageContainer/>
            </Box>
            <FormHelperText
                style={{minWidth: '150px', color: theme.palette.error.main, textAlign: 'center'}}>
                {uploadImageState?.data === null && values.PosterUrl === null ?
                    'Please upload poster' : ''}
                {movieState?.error?.validationErrors !== null &&
                movieState?.error?.validationErrors["MovieRequest.PosterUrl"] !== null ?
                    movieState?.error?.validationErrors["MovieRequest.PosterUrl"] : ''}
            </FormHelperText>
        </TableCell>
    )
}

export default TableCellUpdatingImage;