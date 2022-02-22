import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import {getJwtPayload} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";
import ProfilePage from "../component/ProfilePage";
import {getUserProfileById} from "../store/action-creator/ProfileActions";
import {UserRole} from "../../Shared/constants/RoleNames";

const ProfilePageContainer = () => {
    const [tabsValue, setTabsValue] = React.useState('tickets');

    const [showPastTickets, setShowPastTickets] = React.useState(false);

    const handleChangeShowPastTickets = (event) => {
        setShowPastTickets(event.target.checked);
    };

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
            const {UserProfileId, Role} = getJwtPayload();
            if (Role !== UserRole) {
                navigate('/')
            } else {
                if (UserProfileId) {
                    await dispatch(await getUserProfileById(UserProfileId, showPastTickets))
                } else {
                    navigate('/login')
                }
            }
            setIsLoading(false)
        }

        if (isLoading === true || showPastTickets !== undefined) {
            getUserProfile()
        }

    }, [dispatch, isLoading, navigate, showPastTickets])

    if (isLoading === true) {
        return (
            <Loading isLoading={true}/>
        )
    } else {
        return (
            <ProfilePage theme={theme} tabsValue={tabsValue} handleChange={handleChange}
                         userProfileState={userProfileState} showPastTickets={showPastTickets}
                         handleChangeShowPastTickets={handleChangeShowPastTickets}/>
        )
    }
}

export default ProfilePageContainer;