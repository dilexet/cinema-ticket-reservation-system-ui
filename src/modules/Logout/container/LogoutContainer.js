import {useEffect, useState} from "react";
import {removeTokens} from "../../Shared/utils/TokenServices";
import {Navigate} from "react-router-dom";
import Loading from "../../Loading/component/Loading";
import {useAuthenticate} from "../../Shared/utils/AuthenticateContext";

const LogoutContainer = () => {

    const [isLoading, setIsLoading] = useState(true);
    const {isAuthenticate, changeAuthenticate} = useAuthenticate();

    useEffect(() => {
        async function logout() {
            removeTokens();
            changeAuthenticate(false)
            setIsLoading(false)
        }

        logout()
    }, [changeAuthenticate]);

    if (!isLoading && !isAuthenticate) {
        return (
            <Navigate to='/'/>
        )
    } else {
        return <Loading/>
    }
}

export default LogoutContainer;