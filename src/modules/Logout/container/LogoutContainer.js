import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {removeTokens} from "../../Shared/utils/TokenServices";
import Loading from "../../Loading/component/Loading";

const LogoutContainer = ({isAuthenticate, setIsAuthenticate}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function logout() {
            removeTokens();
            setIsAuthenticate(false)
            setIsLoading(false)
        }

        logout()
    }, [setIsAuthenticate]);

    if (!isLoading && !isAuthenticate) {
        return (
            <Navigate to='/'/>
        )
    } else {
        return <Loading isLoading={true}/>
    }
}

export default LogoutContainer;