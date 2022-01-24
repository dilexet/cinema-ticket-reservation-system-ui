import React, {useEffect} from 'react';
import MovieUpdateRow from "../component/MovieUpdateRow";
import movieSchema from "../constants/MovieSchema";
import {useDispatch, useSelector} from "react-redux";
import {clearErrors, updateMovie} from "../store/action-creator/MovieManagementActions";

const MovieUpdateRowContainer = ({movie, index, setOpenEditId, theme}) => {
    const initialValues = {
        "Id": movie.id,
        "Name": movie.name,
    }

    const [isUpdate, setIsUpdate] = React.useState(false)

    const dispatch = useDispatch();

    const movieState = useSelector((state) => state.movieManagement);

    const handleCloseClick = () => {
        setIsUpdate(false)
        setOpenEditId(-1)
        dispatch(clearErrors())
    }

    const handleSubmitEditClick = async (values) => {
        setIsUpdate(false)
        if (await movieSchema.isValid(values)) {
            await dispatch(await updateMovie(values, movie.id))
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
    }, [isUpdate, movieState.error]);


    return (
        <MovieUpdateRow
            index={index} theme={theme} initialValues={initialValues}
            handleSubmitEditClick={handleSubmitEditClick}
            handleCloseClick={handleCloseClick} movieState={movieState}
        />
    )
}

export default MovieUpdateRowContainer;