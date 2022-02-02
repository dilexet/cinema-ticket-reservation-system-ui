import React from 'react'
import {Avatar, Box, FormHelperText, TableCell} from "@mui/material";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import UploadImageContainer from "../../UploadImage/container/UploadImageContainer";

const TableCellCreatingImage = ({uploadImageState, theme, movieState}) => {
    return (
        <TableCell component="th" scope="row" align="center">
            <Box component="div" sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Avatar alt="Poster" src={`${BaseURL}${uploadImageState?.data?.posterPath}`}/>
                <UploadImageContainer/>
            </Box>
            <FormHelperText
                style={{minWidth: '150px', color: theme.palette.error.main, textAlign: 'center'}}>
                {uploadImageState?.data === null ? 'Please upload poster' : ''}
                {movieState?.error?.validationErrors &&
                movieState?.error?.validationErrors["MovieRequest.PosterUrl"] ?
                    movieState?.error?.validationErrors["MovieRequest.PosterUrl"] : ''}
            </FormHelperText>
        </TableCell>
    )
}

export default TableCellCreatingImage;