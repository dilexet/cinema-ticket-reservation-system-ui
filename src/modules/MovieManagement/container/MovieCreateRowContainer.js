import React, {useCallback, useEffect} from 'react';
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


    const handleCloseClick = useCallback(async () => {
        setOpenAdd(false)
        setIsCreate(false)
        await dispatch(clearErrors())
        await dispatch(clearUploadImage())
    }, [dispatch, setOpenAdd])

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await movieSchema.isValid(values) && uploadImageState?.data?.posterPath !== null) {
            const newValues = {...values}
            newValues.PosterUrl = `${BaseURL}${uploadImageState?.data?.posterPath}`;

            newValues.Countries = newValues.Countries.split(',').map(country => country.trim())
            newValues.Genres = newValues.Genres.split(',').map(genre => genre.trim())

            await dispatch(await createMovie(newValues))
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
    }, [handleCloseClick, isCreate, movieState.error]);


    return (
        <MovieCreateRow
            theme={theme} moviesState={movieState}
            handleSubmitCreateClick={handleSubmitCreateClick}
            handleCloseClick={handleCloseClick}
            uploadImageState={uploadImageState}
        />
    )
}

export default MovieCreateRowContainer;