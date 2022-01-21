import React from 'react'
import UploadImage from "../component/UploadImage";
import {useDispatch} from "react-redux";
import {uploadImageAsyncAction} from "../store/action-creator/UploadImageActions";

const UploadImageContainer = () => {
    // const[] = React.useState();

    const dispatch = useDispatch();

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("formFile", file)
        await dispatch(uploadImageAsyncAction(formData));
        console.log(formData)
    }

    return (
        <UploadImage handleUploadImage={handleUploadImage}/>
    )
}

export default UploadImageContainer;