import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import HallUpdateRow from "../component/HallUpdateRow";
import hallSchema from "../constants/HallSchema";

const HallUpdateRowContainer = ({hall, index, setOpenEditId, theme}) => {
    return (
        <HallUpdateRow/>
    )
}

export default HallUpdateRowContainer;