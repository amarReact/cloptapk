import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import { AuthContext } from "../utility/AuthContext";
import AuthStack from "./AuthStack";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={styles.loaderDv}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
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
