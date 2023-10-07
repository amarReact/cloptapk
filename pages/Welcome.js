import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.holder}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.boxDv}>
            <Text style={styles.pera}>
              Welcome to MIET School
            </Text>
            <Image
              source={require('../assets/school-image.jpeg')}
              style={styles.image}
            />
            <View style={styles.button}>
            <Buttons
              title="Get Started"
              
              onPress={() => navigation.navigate("Login")}
            />
            </View>
        </View>
        <View style={styles.bottomimg}>
          <Text style={styles.heading}>Powered By:</Text>
          <Logo />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
    backgroundColor: "#F1F5F7",
  },
  holder:{
    justifyContent: "center",
    alignItems: "center",
  },
  boxDv: {
    textAlign: "center",
    marginTop: "auto",
    backgroundColor:'pink',
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:25,
    borderRadius:11
  },
  bottomimg :{
    marginTop:40
  },
  heading: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "500",
    marginTop: "auto",
    color: "#FF5315",
    textAlign:'center'
  },
  pera: {
    fontSize: 35,
    lineHeight: 38,
    paddingBottom: 30,
    paddingTop:30,
    fontWeight: "400",
    color: "#34495E",
    textAlign: "center",
    
  },
  logo:{
    marginBottom:40,
  },
  image: {
    width:130,
    height:100,
    marginBottom:30
  },
  button:{
    marginBottom:30
  },
  logoImg: {
    width: 200,
    height: 27,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#FF5315",
    borderRadius: 5,
    width: "100%", // Set the desired width
    height: 40, // Set the desired height
    justifyContent: "center", // Center the button's content vertically
    alignItems: "center",
    elevation: 0, // Center the button's content horizontally
  },
});

export default Welcome;
