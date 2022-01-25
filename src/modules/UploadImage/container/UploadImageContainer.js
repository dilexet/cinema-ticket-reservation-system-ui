import React from 'react'
import {useDispatch} from "react-redux";
import {uploadImageAsyncAction} from "../store/action-creator/UploadImageActions";
import UploadImage from "../component/UploadImage";

const UploadImageContainer = () => {
    const dispatch = useDispatch();

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("formFile", file)
        await dispatch(uploadImageAsyncAction(formData));
    }

    return (
        <UploadImage handleUploadImage={handleUploadImage}/>
    )
}

export default UploadImageContainer;