import React, {useEffect} from 'react';
import MovieCreateRow from "../component/MovieCreateRow";
import {useDispatch, useSelector} from "react-redux";
import movieSchema from "../constants/MovieSchema";
import {clearErrors, createMovie} from "../store/action-creator/MovieManagementActions";

const MovieCreateRowContainer = ({setOpenAdd, theme}) => {

    const [isCreate, setIsCreate] = React.useState(false)

    const dispatch = useDispatch();

    const movieState = useSelector((state) => state.movieManagement);

    const handleCloseClick = async () => {
        console.log("CLICK")
        setOpenAdd(false)
        setIsCreate(false)
        await dispatch(clearErrors())
    }

    const handleSubmitCreateClick = async (values) => {
        setIsCreate(false)
        if (await movieSchema.isValid(values)) {
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
        />
    )
}

export default MovieCreateRowContainer;