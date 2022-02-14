import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import {getJwtPayload} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";
import ProfilePage from "../component/ProfilePage";
import {getUserProfileById} from "../store/action-creator/ProfileActions";

const ProfilePageContainer = () => {
    const [tabsValue, setTabsValue] = React.useState('tickets');

    const handleChange = (event, newTabValue) => {
        setTabsValue(newTabValue);
    };

    const [isLoading, setIsLoading] = React.useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();

    const userProfileState = useSelector(state => state.userProfile);

    React.useEffect(() => {
        const getUserProfile = async () => {
            const {UserProfileId} = getJwtPayload();

            if (UserProfileId) {
                await dispatch(await getUserProfileById(UserProfileId))
            } else {
                navigate('/login')
            }
            setIsLoading(false)
        }

        if (isLoading === true) {
            getUserProfile()
        }

    }, [dispatch, isLoading, navigate])

    if (isLoading === true) {
        return (
            <Loading isLoading={true}/>
        )
    } else {
        return (
            <ProfilePage theme={theme} tabsValue={tabsValue} handleChange={handleChange}
                         userProfileState={userProfileState}/>
        )
    }
}

export default ProfilePageContainer;