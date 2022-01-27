import React from 'react'
import {Formik} from 'formik';
import {ButtonGroup, IconButton, TableCell, TableRow} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "../../Shared/components/TextField"
import handleErrorService from "../../Shared/utils/HandleErrorService";
import hallSchema from "../constants/HallSchema";

const HallUpdateRow = ({
                             index, theme, initialValues,
                             handleSubmitEditClick,
                             handleCloseClick, hallManagementState
                         }) => {
    return (
        <div>
            HallUpdateRow
        </div>
    )
}

export default HallUpdateRow;