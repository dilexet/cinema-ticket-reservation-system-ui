import React from "react";
import DrawerComponent from "../component/DrawerComponent";

const DrawerContainer = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <DrawerComponent open={open} toggleDrawer={toggleDrawer}/>
    )
}

export default DrawerContainer;