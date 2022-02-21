import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import {getMoviesByFilter} from "../../MoviePage/store/action-creator/MovieActions";
import Home from "../component/Home";

const HomeContainer = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const moviesState = useSelector((state) => state.movieManagement);

    const [isLoading, setIsLoading] = React.useState(true);

    const [sliderSettings, setSliderSettings] = React.useState(null);


    React.useEffect(() => {
        const getAvailableSessions = async () => {
            await dispatch(await getMoviesByFilter())
            setIsLoading(false)
        }

        if (isLoading === true) {
            getAvailableSessions();
        }

    }, [dispatch, isLoading])

    React.useEffect(() => {
        if (moviesState?.dataList?.movies?.length > 4) {
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
            };
            setSliderSettings(settings)
        } else if (moviesState?.dataList?.movies?.length === 4) {
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
            };
            setSliderSettings(settings)
        } else {
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            };
            setSliderSettings(settings)
        }
    }, [moviesState?.dataList?.movies?.length])

    if (isLoading === true) {
        return (
            <Loading isLoading={true}/>
        )
    } else {
        return (
            <Home theme={theme} moviesState={moviesState} settings={sliderSettings}/>
        );
    }
}

export default HomeContainer;