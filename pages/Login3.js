import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";
import InputeFields from '../component/InputeFields';
import Links from '../component/Links';
const Login = () => {
  const navigation = useNavigation();
  const onChangeText = (e) =>{
    console.log(e.target.value)
  }
  const onPress = (e) =>{
    console.log('press')
  }
  return (
    <View style={styles.container}>
      <View style={styles.holder}>
          <Text style={styles.pera}>
            Welcome to <Text style={styles.span}> MIET</Text> 
          </Text>
          <Image
            source={require('../assets/login.png')}
            style={styles.image}
          />
      </View>
      <Text style={styles.resets}> Reset Password</Text> 
      <Text style={styles.enter}>Please enter your phone number</Text>
     
      <View style={styles.inputContainer}>
      <InputeFields
       label={"Phone Number"}
        placeholder= {"012-221-9581"}
        onChangeText={(e)=>onChangeText}
        />
           <View style={styles.prefixContainer}>
        <Text style={styles.prefixText}>+91</Text>
      </View>
    </View>
         
   
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Buttons
            title="Continue"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.button}>
          <Buttons
            title="Login via OTP"
            onPress={() => navigation.navigate("Otp")}
          />
        </View>
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
    backgroundColor: "#fbfbfb",
  },
  button:{
    marginTop:20,
    width:'100%'
  },
  buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
    width:'100%',
    marginTop:20
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: '',
    borderRadius: 5, 
   
  },

  prefixContainer: {
    position: 'absolute',
    left:16, 
    top: 26, 
    backgroundColor: '#fee6dc',
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5,
    padding:12.5,
  },
  prefixText: {
    color: '#e16132',
    fontSize: 14,
    fontWeight:600,
  },

  link:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingHorizontal:20,
    width:'100%',
    color: '#3D5EE1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomimg :{
    marginTop:50,
    justifyContent:'center',
    alignItems:'center'
  },
  holder:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30,
    marginTop: "auto",
  },
  pera: {
    fontSize: 20,
    lineHeight: 25,
    paddingBottom: 20,
    fontWeight: "500",
    color: "#3b312f",
    textAlign: "center",
    
  },

  span:{
    fontSize: 30,
    lineHeight: 35,
    display:"block", 
  color:" rgb(255, 83, 21)",  
  fontWeight: "700", 
  paddingTop:5,
},

resets:{
  fontSize: 16,
  lineHeight: 22,
  fontWeight: "600",
 paddingLeft:10,
 paddingBottom:5,
},
heading: {
  fontSize: 16,
  marginBottom: 10,
  fontWeight: "500",
  marginTop: 10,
  color: "#FF5315",
  textAlign:'center'
},

enter:{
  fontSize: 14,
  lineHeight: 22,
  fontWeight: "400",
 paddingLeft:15,
 color:"#a6a6a6",
 paddingBottom:20,
},
  image: {
    width:120,
    height:130,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30
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

export default Login;
