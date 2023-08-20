
import React, {createContext, useState} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userData, setUserData] = useState({})

    const logIn =(token, data)=>{
      setUserToken(token)
      setIsLoading(false)
      setUserData(data)
    }
    const logOut =()=>{
      setUserToken(null)
      setIsLoading(false)
    }
  return (
    <AuthContext.Provider value={{logIn, logOut, isLoading, userToken, userData}}>
        {children}
    </AuthContext.Provider>
  )
}
