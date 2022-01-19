import React, {createContext, useContext, useMemo, useState} from 'react'

export const AuthenticateContext = createContext({
    isAuthenticate: null,
    changeAuthenticate: (isAuth) => {
    },
})

export const useAuthenticate = () => {
    return useContext(AuthenticateContext)
}

export const AuthenticateProvider = ({children}) => {
    const [isAuthenticate, setIsAuthenticate] = useState(null)

    const changeAuthenticate = (isAuth) => {
        console.log("call" + isAuth)
        setIsAuthenticate(isAuth)
    }

    const value = useMemo(() => ({isAuthenticate, changeAuthenticate}), [changeAuthenticate, isAuthenticate])
    return <AuthenticateContext.Provider value={value}>{children}</AuthenticateContext.Provider>
}
