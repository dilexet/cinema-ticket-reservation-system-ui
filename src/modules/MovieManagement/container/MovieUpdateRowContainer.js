import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toDateStringInputFormat} from "../../Shared/utils/DateConverter";
import {clearUploadImage} from "../../UploadImage/store/action-creator/UploadImageActions";
import {BaseURL} from "../../Shared/constants/BaseURLs";
import {clearErrors, updateMovie} from "../store/action-creator/MovieManagementActions";
import MovieUpdateRow from "../component/MovieUpdateRow";
import movieSchema from "../constants/MovieSchema";

const MovieUpdateRowContainer = ({movie, index, setOpenEditId, theme}) => {
    const initialValues = {
        "Name": movie.name,
        "PosterUrl": movie.posterUrl,
        "StartDate": toDateStringInputFormat(movie.startDate),
        "EndDate": toDateStringInputFormat(movie.endDate),
        "ReleaseDate": toDateStringInputFormat(movie.movieDescription.releaseDate),
        "Description": movie.movieDescription.description,
        "Countries": movie.movieDescription.countries.join(`,`),
        "Genres": movie.movieDescription.genres.join(`,`),
    }

    const [isUpdate, setIsUpdate] = React.useState(false)

    const dispatch = useDispatch();

    const movieState = useSelector((state) => state.movieManagement);
    const uploadImageState = useSelector((state) => state.uploadImage);

    const handleCloseClick = useCallback(async () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        await dispatch(clearErrors())
        await dispatch(clearUploadImage())
    }, [dispatch, setOpenEditId])

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await movieSchema.isValid(values)) {
            if (uploadImageState?.data !== null) {
                values.PosterUrl = `${BaseURL}${uploadImageState?.data?.posterPath}`;
            }
            values.Countries = values.Countries.split(',')
            values.Genres = values.Genres.split(',')
            await dispatch(await updateMovie(values, movie.id))
            values.Countries = values.Countries.join(',')
            values.Genres = values.Genres.join(',')
            setIsUpdate(true)
        }
    }

    useEffect(() => {
        const close = () => {
            if (isUpdate === true && movieState.error === null) {
                handleCloseClick()
            }
        }
        close()
    }, [handleCloseClick, isUpdate, movieState.error]);


    return (
        <MovieUpdateRow
            index={index} theme={theme} initialValues={initialValues}
            handleSubmitEditClick={handleSubmitEditClick}
            handleCloseClick={handleCloseClick} movieState={movieState}
            uploadImageState={uploadImageState}
        />
    )
}

export default MovieUpdateRowContainer;