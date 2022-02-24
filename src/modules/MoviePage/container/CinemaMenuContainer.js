import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getListCinemaNames} from "../store/action-creator/MovieActions";
import CinemaMenu from "../component/Menu/CinemaMenu";

const CinemaMenuContainer = ({open, filter, setFilter}) => {
    const dispatch = useDispatch();
    const movieFilterState = useSelector((state) => state.movieFilter);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = React.useState('');

    const handleChange = async (event) => {
        setSearch(event.target.value)
    }

    const handleCinemaChoose = (name) => {
        setFilter({...filter, CinemaName: name})
    }

    useEffect(() => {
        const getCinemaNames = async () => {
            await dispatch(await getListCinemaNames(search))
        }
        getCinemaNames()
    }, [dispatch, search])

    useEffect(() => {
        async function getCinemaNames() {
            await dispatch(await getListCinemaNames())
            setIsLoading(false)
        }

        if (isLoading === true) {
            getCinemaNames()
        }
    }, [dispatch, isLoading]);

    useEffect(() => {
        if (open === true) {
            setSearch('')
        }
    }, [open])


    return (
        <CinemaMenu open={open} handleChange={handleChange}
                    movieFilterState={movieFilterState} filter={filter}
                    handleCinemaChoose={handleCinemaChoose}/>
    )
}

export default CinemaMenuContainer;