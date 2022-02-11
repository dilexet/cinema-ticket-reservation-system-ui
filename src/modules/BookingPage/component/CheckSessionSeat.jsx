import React from "react";
import {Box, Fade, Tooltip} from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import {TicketState} from "../../Shared/constants/TicketState";
import {ColorSeatsType, SeatBookedColor, SeatSelectedColor} from "../constants/ColorSeatsType";
import ToolTipSeatMenu from "./ToolTipSeatMenu";

const CheckSessionSeat = ({theme, seatId, handleSelectSeat, handleCancelSelectSeat, sessionSeat, seatIsBooked}) => {
    return (
        <Box>
            {
                sessionSeat?.ticketState === TicketState.Free ?
                    <Tooltip TransitionComponent={Fade} arrow placement="top"
                             TransitionProps={{timeout: 400}}
                             title={<ToolTipSeatMenu theme={theme} sessionSeat={sessionSeat}/>}
                             componentsProps={{
                                 tooltip: {
                                     sx: {
                                         backgroundColor: theme.palette.mode === 'dark' ?
                                             'rgba(0, 0, 0, 0.9)' :
                                             'rgba(255, 255, 255, 0.9)',
                                     }
                                 },
                                 arrow: {
                                     sx: {
                                         color: theme.palette.mode === 'dark' ?
                                             'rgba(0, 0, 0, 0.9)' :
                                             'rgba(255, 255, 255, 0.9)',
                                     }
                                 }
                             }}>
                        <Box onClick={() => handleSelectSeat(seatId)}
                             style={{
                                 margin: '0 2px',
                                 cursor: 'pointer',
                             }}>
                            <CropSquareIcon style={{
                                fontSize: '40px',
                                color: ColorSeatsType[sessionSeat?.seat?.seatType],
                            }}/>
                        </Box>
                    </Tooltip> :
                    seatIsBooked ?
                        <Box onClick={() => handleCancelSelectSeat(seatId)}
                             style={{
                                 margin: '0 2px',
                                 cursor: 'pointer',
                             }}>
                            <SquareRoundedIcon style={{
                                fontSize: '40px',
                                fill: SeatSelectedColor,
                            }}/>
                        </Box> :
                        <Box style={{
                            margin: '0 2px',
                            cursor: 'not-allowed'
                        }}>
                            <CropSquareIcon style={{
                                fontSize: '40px',
                                color: SeatBookedColor,
                            }}/>
                        </Box>
            }
        </Box>
    )
}

export default CheckSessionSeat;