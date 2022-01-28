import React from 'react';
import Row from "../../component/Get/Row";

const RowContainer = ({row, index}) => {
    const [openSeats, setOpenSeats] = React.useState(false);

    return (
        <Row row={row} index={index} setOpenSeats={setOpenSeats} openSeats={openSeats}/>
    )
}

export default RowContainer;