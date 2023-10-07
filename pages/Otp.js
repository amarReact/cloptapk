import React, { useState,useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";
import InputeFields from '../component/InputeFields';
import Links from '../component/Links';
import { number } from "prop-types";
import {BASE_URL} from '../redux/constants';
import {setAuthorizationToken} from '../component/axiosConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {AuthContext} from '../utility/AuthContext';
const Otp = () => {
  const navigation = useNavigation();
  const [enteredNumber,setenteredNumber] = useState('')
  const [buttondisabled,setbuttondisabled] = useState(true)
  const [verifyotp,setverifyotp] = useState(false)
  const [otp, setOtp] = useState('');
  const [otperror, setotperror] = useState(false);
  const [error, seterror] = useState(false);
  const [otpsuccessmsg, setotpsuccessmsg] = useState('');
  const { logIn } = useContext(AuthContext);
  const handleVerify = () => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    setotpsuccessmsg('')
    if(otp.length < 0){
      setotperror(true)
    }
    else {
      setotperror(false)
      const newnum = '91'+ enteredNumber;
      verifyOtpFunc(newnum);
    }
    console.log('OTP is ', otp);
  };
  const onChangeText = (e) =>{
    setenteredNumber(e)
    if(e.length > 0){
      setbuttondisabled(false)
      seterror(false)
    }
    else {
      setbuttondisabled(true)
    }
  }

  const onPress = (e) =>{
    
    if(enteredNumber.length !== 10){
      seterror(true)
    }
    else {
      seterror(false)
      setverifyotp(true)
      const newnum = '91'+ enteredNumber;
      console.log(newnum, enteredNumber.length)
      loginPostFunc(newnum);
    }

  }
  const verifyOtpFunc = async (num) => {
    const userOtp = {
      emailOrPhoneNumber: num,
      otp:otp
    };
    console.log(userOtp)
    try {
      const response = await axios.post(`${BASE_URL}/verify_login_otp`, userOtp);
      const responseData = response;
      console.log(responseData)
      if (responseData.data.success) {
        const userToken = responseData?.data?.body?.token;
        await AsyncStorage.setItem('token', userToken);
        await AsyncStorage.setItem('user', JSON.stringify(responseData?.data?.body));
        axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        setAuthorizationToken(userToken);
        const userdata = await AsyncStorage.getItem('user');
        //const userdata = responseData?.data?.body;
        const auth = JSON.parse(userdata);
        logIn(userToken,auth)
        
        console.log(auth)
        // let timer = setTimeout(() => {
          switch (auth?.role_id) {
            case 1:
              return navigation("/super-admin-dashboard");
            case 2:
              return navigation("/school-dashboard");
            case 3:
              return navigation("/teacher-dashboard");
            case 4:
              return navigation.navigate('AuthStack', { screen: 'Teacher' });
            default:
              return null;
          }
        //   clearTimeout(timer);
        // }, 3000);
          
      } else {
        const errorCode = responseData.code;
        const errorMessage = responseData.message;
        //toast.error(responseData?.message, { position: "top-center" });
        setErrors({})
      }
 
    } catch (error) {
      //toast.error(error?.response?.data?.message, {autoClose: 1000, position: "top-center" });
      console.log(error);
    }
  };
  const loginPostFunc = async (num) => {
    const userLogin = {
      emailOrPhoneNumber: num,
    };
    
    try {
      const response = await axios.post(`${BASE_URL}/send_login_otp`, userLogin);
      const responseData = response;
      console.log(responseData)
      if (responseData.data.success) {
        const msg = responseData?.data?.message;
          setotpsuccessmsg(msg)
      }
 
    } catch (error) {
      //toast.error(error?.response?.data?.message, {autoClose: 1000, position: "top-center" });
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.holder}>
          <Text style={styles.pera}>
            Welcome to MIET School
          </Text>
          <Image
            source={require('../assets/school-image.jpeg')}
            style={styles.image}
          />
      </View>
      {!verifyotp && <InputeFields
        label={"Enter Your Mobile no"}
        placeholder={"Mobile no"}
        onChangeText={onChangeText}
        value={enteredNumber}
        secureTextEntry={false}
        numeric={true}
        />}
        {verifyotp && <InputeFields
        label={"Enter OTP"}
        placeholder={"OTP"}
        onChangeText={(e)=> setOtp(e)}
        value={otp}
        />}
        { error && <Text style={styles.error}>
            Please Enter valid Number
          </Text>}
          {otpsuccessmsg && <Text style={styles.success}>{otpsuccessmsg}</Text>}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          {!verifyotp && <Buttons
            title="Get Otp"
            onPress={onPress}
            disabled={buttondisabled}
          />}
          {verifyotp && <Buttons
            title="Verify Otp"
            onPress={handleVerify}
          />}
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
    backgroundColor: "#F1F5F7",
  },
  button:{
    marginTop:20,
    width:'100%'
  },
  success:{
    color : 'green',
  },
  error:{
    color:'red',
  },
  buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
    width:'100%',
    marginTop:20
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
    marginTop:80,
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
    fontSize: 35,
    lineHeight: 38,
    paddingBottom: 30,
    paddingTop:30,
    fontWeight: "400",
    color: "#34495E",
    textAlign: "center",
  },
  image: {
    width:130,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30
  },

});

export default Otp;
