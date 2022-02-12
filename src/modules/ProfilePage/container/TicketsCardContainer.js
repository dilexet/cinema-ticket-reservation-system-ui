import React from 'react'
import TicketsCard from "../component/TicketsCard";

const TicketsCardContainer = ({theme, ticket}) => {
    const [open, setOpen] = React.useState(false)
    console.log(ticket)
    return (
        <TicketsCard theme={theme} ticket={ticket} open={open} setOpen={setOpen}/>
    )
}

export default TicketsCardContainer;