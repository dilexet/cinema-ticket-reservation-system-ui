import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useTheme} from "@mui/material";
import Loading from "../../Loading/component/Loading";
import CinemasTable from "../component/CinemasTable";
import {getCinemas} from "../store/action-creator/CinemaManagementActions";

const CinemaManagementContainer = () => {
    const dispatch = useDispatch();
    const cinemaState = useSelector((state) => state.cinemaManagement);

    const theme = useTheme();
    const [isLoading, setIsLoading] = React.useState(true);
    const [openEditId, setOpenEditId] = React.useState(-1);
    const [openDeleteId, setOpenDeleteId] = React.useState(-1);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleAddClick = () => {
        setOpenAdd(true)
    }

    useEffect(() => {
        async function getCinemasList() {
            await dispatch(await getCinemas());
            setIsLoading(false)
        }

        if (isLoading === true) {
            getCinemasList()
        }
    }, [dispatch, isLoading, setIsLoading]);

    if (isLoading) {
        return <Loading isLoading={true}/>
    } else {
        return (
            <CinemasTable theme={theme} cinemasState={cinemaState} openEditId={openEditId}
                          setOpenEditId={setOpenEditId} openDeleteId={openDeleteId} setOpenAdd={setOpenAdd}
                          setOpenDeleteId={setOpenDeleteId} openAdd={openAdd} handleAddClick={handleAddClick}

            />
        )
    }
}

export default CinemaManagementContainer;