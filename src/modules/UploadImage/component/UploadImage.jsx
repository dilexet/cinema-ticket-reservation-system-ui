import React from 'react'
import {IconButton, Stack, styled} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Input = styled('input')({
    display: 'none',
});

const UploadImage = ({handleUploadImage}) => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input
                    accept=".jpg, .jpeg, .png"
                    id="contained-button-file"
                    type="file"
                    onChange={handleUploadImage}
                />
                <IconButton color="primary" aria-label="upload picture" component="span"
                            style={{
                                margin: '10px 10px'
                            }}>
                    <FileUploadIcon/>
                </IconButton>
            </label>
        </Stack>
    )
}

export default UploadImage;