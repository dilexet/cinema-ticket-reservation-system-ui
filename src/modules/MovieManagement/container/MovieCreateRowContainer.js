import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import {clearUploadImage} from "../../UploadImage/store/action-creator/UploadImageActions";
import MovieCreateRow from "../component/MovieCreateRow";
import movieSchema from "../constants/MovieSchema";
import {clearErrors, createMovie} from "../store/action-creator/MovieManagementActions";

const MovieCreateRowContainer = ({setOpenAdd, theme}) => {

    const [isCreate, setIsCreate] = React.useState(false)

    const dispatch = useDispatch();

    const movieState = useSelector((state) => state.movieManagement);
    const uploadImageState = useSelector((state) => state.uploadImage);


    const handleCloseClick = async () => {
        setOpenAdd(false)
        setIsCreate(false)
        await dispatch(clearErrors())
        await dispatch(clearUploadImage())
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await movieSchema.isValid(values) && uploadImageState?.data?.posterPath !== null) {
            values.PosterUrl = `${BaseURL}${uploadImageState?.data?.posterPath}`;
            values.Countries = values.Countries.split(',')
            values.Genres = values.Genres.split(',')
            await dispatch(await createMovie(values))
            setIsCreate(true)
        }
    }

    useEffect(() => {
        const close = async () => {
            if (isCreate === true && movieState.error === null) {
                await handleCloseClick()
            }
        }
        close()
    }, [isCreate, movieState.error]);


    return (
        <MovieCreateRow
            theme={theme} movieState={movieState}
            handleSubmitCreateClick={handleSubmitCreateClick}
            handleCloseClick={handleCloseClick}
            uploadImageState={uploadImageState}
        />
    )
}

export default MovieCreateRowContainer;