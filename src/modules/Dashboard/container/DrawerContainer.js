import React from "react";
import DrawerComponent from "../component/DrawerComponent";
import {getRole} from "../../Shared/utils/TokenServices";

const DrawerContainer = () => {
    const [open, setOpen] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(null);
    const [role, setRole] = React.useState(null);

    React.useEffect(() => {
        if (isLoading === true) {
            const roleName = getRole();
            setRole(roleName)
        }
        if (isLoading === null) {
            setIsLoading(true)
        }
    }, [isLoading, role]);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <DrawerComponent open={open} toggleDrawer={toggleDrawer} role={role}/>
    )
}

export default DrawerContainer;