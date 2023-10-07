import React, { useState,useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";
import InputeFields from '../component/InputeFields';
import Links from '../component/Links';
import Toaster from '../component/Toster';
import axios from "axios";
import {setAuthorizationToken} from '../component/axiosConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SecureStore } from 'expo';
import {BASE_URL} from '../redux/constants';
import { AuthContext } from "../utility/AuthContext";
const Login = () => {
  const navigation = useNavigation();

  const [errors, setErrors] = useState({});
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { setUserToken } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formList = {
      email: email,
      password: password,
    };
    const validationErrors = validate(formList);
    console.log('errrr',Object.keys(validationErrors).length)
    if (Object.keys(validationErrors).length === 0) {
      loginPostFunc();
    } else {
      // toast.error("Please fill in the required field!", {
      //   position: "top-center",
      // });
      //console.log('errrr',validationErrors)
      setErrors(validationErrors);
    }
  };
  const validate = (values) => {
    
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 3) {
      errors.password = "Password must be more than 3 characters";
    }
    return errors;
  };
  const loginPostFunc = async () => {
    const userLogin = {
      emailOrPhoneNumber: email,
      password: password,
    };
    try {
      const response = await axios.post(`${BASE_URL}/login`, userLogin);
      const responseData = response;
      console.log(responseData.data)

      if (responseData.data.success) {
        const userToken = responseData?.data?.body?.token;
        setUserToken(userToken)
        await AsyncStorage.setItem('token', userToken);
        await AsyncStorage.setItem('user', JSON.stringify(responseData?.data?.body));
        axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        setAuthorizationToken(userToken);
        const userdata = await AsyncStorage.getItem('user');
        const auth = JSON.parse(userdata);
        
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

  const onChangeText = (e) =>{
    setemail(e)
  }
  const onPress = (e) =>{
    console.log('press')
  }
  return (
    <View style={styles.container}>
    {/* {console.log(formData)} */}
      <View style={styles.holder}>
          <Text style={styles.pera}>
            Welcome to MIET School
          </Text>
          <Image
            source={require('../assets/school-image.jpeg')}
            style={styles.image}
          />
      </View>
      <InputeFields
        label={"Enter Email-Id/Mobile no"}
        placeholder={"Enter Email"}
        value={email}
        onChangeText={(e) => setemail(e)}
      />
      {errors.email && <Text>{errors.email}</Text>}
      <InputeFields
        label={"Enter Your Password"}
        placeholder={"Enter Your Password"}
        value={password}
        onChangeText={(e)=>setpassword(e)}
      />
        {errors.password && <Text>{errors.password}</Text>}
      <Links 
        title={"Forget Password"}
        onPress={() => navigation.navigate("Forgotpassword")}
        stylee={styles.link}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Buttons
            title="Login"
            onPress={handleSubmit}
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

export default Login;
