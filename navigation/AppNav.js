import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import { AuthContext } from "../utility/AuthContext";
import AuthStack from "./AuthStack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  const [token,settoken]=useState(null)
  const Stack = createNativeStackNavigator();
 useEffect(() => {
    const callToken = async () => {
    const userToken = await AsyncStorage.getItem('token');
    settoken(userToken);
  };
  callToken();
}, [token]);

if (isLoading) {
  return (
    <View style={styles.loaderDv}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}
  console.log(userToken)
  return (
    <>
    {userToken !== null ? <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  :
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>}
    </>
  );
  
};

const styles = StyleSheet.create({
  create: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppNav;
