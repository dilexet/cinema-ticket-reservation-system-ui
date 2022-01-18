import {useEffect, useState} from "react";
import {removeTokens} from "../../Shared/utils/TokenServices";
import {Navigate} from "react-router-dom";
import Loading from "../../Loading/component/Loading";

const LogoutContainer = ({isAuthenticate, setIsAuthenticate}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let cleanupFunction = false;

        async function logout() {
            removeTokens();
            setIsAuthenticate(false)
            setIsLoading(false)
        }

        logout()
        return () => cleanupFunction = true;
    }, [setIsAuthenticate]);

    if (!isLoading && !isAuthenticate) {
        return (
            <Navigate to='/'/>
        )
    } else {
        return <Loading/>
    }
}

export default LogoutContainer;