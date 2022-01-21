import React from 'react'
import {Button, Stack, styled, Typography} from "@mui/material";
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
                <Button
                    variant="contained"
                    component="span"
                    fullWidth
                    style={{borderRadius: "20px"}}
                    size='medium'
                    sx={{mt: 3, mb: 2}}
                >
                    <FileUploadIcon/>
                    <Typography margin="5px 10px">
                        Upload
                    </Typography>
                </Button>
            </label>
        </Stack>
    )
}

export default UploadImage;