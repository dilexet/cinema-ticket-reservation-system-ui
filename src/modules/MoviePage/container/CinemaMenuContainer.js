import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../Loading/component/Loading";
import {getListCinemaNames} from "../store/action-creator/MovieActions";
import CinemaMenu from "../component/Menu/CinemaMenu";

const CinemaMenuContainer = ({open, filter, setFilter}) => {
    const dispatch = useDispatch();
    const movieFilterState = useSelector((state) => state.movieFilter);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = async (event) => {
        await dispatch(await getListCinemaNames(event.target.value))
    }

    const handleCinemaChoose = (name) => {
        setFilter({...filter, CinemaName: name})
    }

    useEffect(() => {
        async function getCinemaNames() {
            await dispatch(await getListCinemaNames())
            setIsLoading(false)
        }

        if (isLoading === true) {
            getCinemaNames()
        }
    }, [dispatch, isLoading]);

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <CinemaMenu open={open} handleChange={handleChange}
                       movieFilterState={movieFilterState} filter={filter}
                        handleCinemaChoose={handleCinemaChoose}/>
        )
    }
}

export default CinemaMenuContainer;