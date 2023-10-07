
import React, {createContext, useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const logOut =async ()=>{
      setUserToken(null)
      setIsLoading(false)
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
    }
    useEffect(() => {
      const fetchToken = async () => {
        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('user');
        const auth = JSON.parse(user);
        setUserToken(token);
        setUserData(auth)
      };
      fetchToken();
    }, []);
    console.log(userToken)
  return (
    <AuthContext.Provider value={{logIn, logOut, isLoading, userToken,setUserToken, userData}}>
        {children}
    </AuthContext.Provider>
  )
}



