import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import {getJwtPayload} from "../../Shared/utils/TokenServices";
import UserProfile from "../component/UserProfile";
import userProfileSchema from "../constants/UserSchema";
import {updateUserProfile} from "../store/action-creator/ProfileActions";

const UserProfileContainer = () => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const userProfileState = useSelector(state => state.userProfile);

    const handleSubmit = async (values) => {
        if (await userProfileSchema.isValid(values)) {
            const {UserProfileId} = getJwtPayload();
            if (UserProfileId) {
                await dispatch(await updateUserProfile(UserProfileId, values))
            } else {
                navigate('/login')
            }
        }
    }

    return (
        <UserProfile theme={theme} handleSubmit={handleSubmit} profileState={userProfileState}/>
    )
}

export default UserProfileContainer;