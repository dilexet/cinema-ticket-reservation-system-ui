import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../Loading/component/Loading";
import {getListCityNames} from "../store/action-creator/MovieActions";
import CityMenu from "../component/Menu/CityMenu";

const CityMenuContainer = ({open, filter, setFilter}) => {
    const dispatch = useDispatch();
    const movieFilterState = useSelector((state) => state.movieFilter);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = async (event) => {
        await dispatch(await getListCityNames(event.target.value))
    }

    const handleCityChoose = (name) => {
        setFilter({...filter, CityName: name})
    }

    useEffect(() => {
        async function getCityNames() {
            await dispatch(await getListCityNames())
            setIsLoading(false)
        }

        if (isLoading === true) {
            getCityNames()
        }
    }, [dispatch, isLoading]);

    if (isLoading === true) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <CityMenu open={open} handleChange={handleChange}
                      movieFilterState={movieFilterState} filter={filter}
                      handleCityChoose={handleCityChoose}/>
        )
    }
}

export default CityMenuContainer;