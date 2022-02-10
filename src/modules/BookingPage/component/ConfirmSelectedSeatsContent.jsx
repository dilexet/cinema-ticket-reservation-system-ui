import React from "react";
import {Box, Button, Divider, Typography} from "@mui/material";
import SelectedSeats from "./SelectedSeats";
import SelectedAdditionalServices from "./SelectedAdditionalServices";

const ConfirmSelectedSeatsContent = ({theme, session, selectedSeats, handleCancelSelectSeat}) => {
    const [totalPrice, setTotalPrice] = React.useState(0);

    const [selectedAdditionalServices, setSelectedAdditionalServices] = React.useState([])

    React.useEffect(() => {
        let price = 0
        selectedSeats.forEach((seat) => {
            price = price + seat?.sessionSeatType?.price
        })
        selectedAdditionalServices.forEach((service) => {
            price = price + service?.price
        })
        setTotalPrice(price)
    }, [selectedAdditionalServices, selectedSeats])


    const handleAddService = (service) => {
        setSelectedAdditionalServices([...selectedAdditionalServices, service])
    }

    const handleRemoveService = (service) => {
        const index = selectedAdditionalServices.indexOf(service)
        if (index > -1) {
            setSelectedAdditionalServices(selectedAdditionalServices.filter((_, i) => i !== index))
        }
    }

    const handleConfirmOrder = (selectedSeats, selectedAdditionalServices) => {

    }

    return (
        <Box
            style={{
                margin: '25px 0', padding: '10px'
            }}>
            <Box
                style={{
                    marginBottom: '20px'
                }}>
                <Box
                    style={{
                        display: 'inline', textAlign: 'left',
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        My tickets
                    </Typography>
                    <Typography
                        style={{
                            marginTop: '25px',
                            fontSize: '15px',
                            fontWeight: '400',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                        }}>
                        {session?.hall?.name}
                    </Typography>
                </Box>
            </Box>
            <Divider/>
            <Box>
                <Box>
                    {
                        selectedSeats?.map((value, index) => (
                                <Box key={index}
                                     style={{
                                         borderBottom: theme.palette.mode === 'dark' ?
                                             '1px solid rgba(255, 255, 255, 0.15' :
                                             '1px solid rgba(0, 0, 0, 0.15',
                                     }}>
                                    <SelectedSeats theme={theme} value={value}
                                                   handleCancelSelectSeat={handleCancelSelectSeat}/>
                                </Box>
                            )
                        )
                    }
                </Box>
                <Box
                    style={{
                        display: 'inline', textAlign: 'left',
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.47em',
                            fontWeight: '700',
                            margin: '50px 0',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        You can select additional services
                    </Typography>
                </Box>
                <Box>
                    {
                        session.sessionAdditionalServices?.map((value, index) => (
                                <Box key={index}
                                     style={{
                                         borderBottom: theme.palette.mode === 'dark' ?
                                             '1px solid rgba(255, 255, 255, 0.15' :
                                             '1px solid rgba(0, 0, 0, 0.15',
                                     }}>
                                    <SelectedAdditionalServices theme={theme} value={value}
                                                                selectedAddServices={selectedAdditionalServices}
                                                                handleAdd={handleAddService}
                                                                handleRemove={handleRemoveService}
                                    />
                                </Box>
                            )
                        )
                    }
                </Box>
                <Box
                    style={{
                        marginTop: '25px', textAlign: 'center'
                    }}>
                    <Typography
                        style={{
                            fontSize: '1.625em',
                            fontWeight: '500',
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                        }}>
                        <span>
                            Total price:&nbsp;
                        </span>
                        <strong>
                            <span>
                                {totalPrice}
                            </span>
                        </strong>
                        <small>
                            &nbsp;$
                        </small>
                    </Typography>
                </Box>
            </Box>
            <Box
                style={{
                    margin: '25px 0'
                }}>
                <Button variant="outlined" fullWidth
                        onClick={() => handleConfirmOrder(selectedSeats, selectedAdditionalServices)}
                        style={{
                            color: theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
                            textTransform: 'none',
                            borderRadius: '22px',
                            border: theme.palette.mode === 'dark' ? '2px solid #FFFFFF' : '2px solid #000000',
                            fontSize: '1em'
                        }}>
                    Confirm
                </Button>
            </Box>
        </Box>
    )
}

export default ConfirmSelectedSeatsContent;