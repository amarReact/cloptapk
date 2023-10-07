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
      <Text style={styles.pera}>
              Welcome to <Text style={styles.span}> MIET</Text> 
            </Text>
        <View style={styles.boxDv}>
           
            <Image
              source={require('../assets/welcome.png')}
              style={styles.image}
            />
            <View style={styles.buttons}>
            <Buttons
              title="Sign In "
              
              onPress={() => navigation.navigate("Login")}
            />
              <Image
              source={require('../assets/arrow.png')}
              style={styles.images}
            />
            </View>
        </View>
        <Text style={styles.creat}>Create an account</Text>
        <View style={styles.bottomimg}>
          <Text style={styles.heading}>Powered By:</Text>
          <Logo />
        </View>
      </View>
      <View style={styles.ourapp}>
          <Text style={styles.concent}>By using Our App, you agree and concent to our:<Text style={styles.service}>Terms of Service-cookiePolicy-PrivacyPolicy</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
    backgroundColor: "#fbf1ef",
    paddingTop:180,
   
  },
  holder:{
    justifyContent: "center",
    alignItems: "center",
  },

    
   

  bottomimg :{
    marginTop:0,
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
    marginTop: 10,
    color: "#FF5315",
    textAlign:'center'
  },
  pera: {
    fontSize: 25,
    lineHeight: 32,
    paddingBottom: 30,
    fontWeight: "500",
    color: "#3b312f",
    textAlign: "center",
    
  },



  creat:{
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    color: "#3b312f",
    textAlign: "center",
    paddingTop:20,
    paddingBottom:20,
  },

  span:{
    fontSize: 40,
    lineHeight: 45,
    display:"block", 
  color:" rgb(255, 83, 21)",  
  fontWeight: "700", 
  paddingTop:8,
},
  logo:{
    marginBottom:40,
  },
  image: {
    width:170,
    height:170,
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
    borderRadius: 30,
    width: "100%", // Set the desired width
    height: 40, // Set the desired height
    justifyContent: "center", // Center the button's content vertically
    alignItems: "center",
    elevation: 0, // Center the button's content horizontally
  },
  ourapp:{
    backgroundColor:"#f6f6f6",
    width:"100%",
    padding:15,
    marginTop:50,
  },
  concent:{
    fontSize: 11,
    lineHeight:18,
    fontWeight: "600",
   color:"#787878",
  },
  service:{
    color:"#dd5e3d",
    fontWeight: "700",
  }
});

export default Welcome;
