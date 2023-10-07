// HomeScreen.js


import { View, Text, StyleSheet, Button } from 'react-native';
import React, {useContext } from "react";
import { AuthContext } from "../utility/AuthContext";
const Home = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button
            title="Logout"
            onPress={logOut}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
