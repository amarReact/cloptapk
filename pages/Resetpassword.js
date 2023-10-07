import React, { useState ,useContext} from "react";
import { View, Text, Button,FlatList, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";
import InputeFields from '../component/InputeFields';
import Links from '../component/Links';
import { number } from "prop-types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {BASE_URL} from '../redux/constants';
import {AuthContext} from '../utility/AuthContext';

const Resetpassword = () => {
  const navigation = useNavigation();
  const [enternedNewpassword,setenternedNewpassword] = useState('')
  const [buttondisabled,setbuttondisabled] = useState('')
  const [confirmpasswd,setconfirmpasswd] = useState('')
  const [isValid, setIsValid] = useState(false);
  const { userData } = useContext(AuthContext);
  const [userdata, setuserdata] = useState(userData);
 

const hardcodedDetails = [
  { id: '1',description: 'At Least one Capital letter' },
  { id: '2',description: 'At Least one Small letter' },
  { id: '3',description: 'Minimum 8 charcters required' },
  { id: '4',description: 'At Least one Digit' },
  { id: '3', description: 'At Least one Special Charecter' },
  // Add more items as needed
];
  const handleVerify = async() => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    const userNewpassd = {
      new_password: enternedNewpassword,
      confirm_password:confirmpasswd,
      user_id:userdata.id
    };
    if(passwordsMatch){
      try {
        const response = await axios.post(`${BASE_URL}/resetPassword`, userNewpassd);
        const responseData = response;
        console.log(responseData)
      } catch (error) {
        //toast.error(error?.response?.data?.message, {autoClose: 1000, position: "top-center" });
        console.log(error);
      }
    }
    //console.log('OTP is ', otp);

  }
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* //<Text style={styles.name}>{item.name}</Text> */}
      {!passwordsMatch && <Text style={isValid  ? styles.validd : styles.validationMessage}>{item.description}</Text>}
    </View>
  );
  const handleNewPasswordChange = (text) => {
    setenternedNewpassword(text);
    setIsValid(isPasswordValid(text));
  };
  function isPasswordValid(password) {
    return (
      isLengthValid(password) &&
      hasUpperCase(password) &&
      hasLowerCase(password) &&
      hasDigit(password) &&
      hasSpecialCharacter(password)
    );
  }
  function isLengthValid(password) {
    return password.length >= 8; // Minimum length of 8 characters
  }
  
  function hasUpperCase(password) {
    return /[A-Z]/.test(password); // At least one uppercase letter
  }
  
  function hasLowerCase(password) {
    return /[a-z]/.test(password); // At least one lowercase letter
  }
  
  function hasDigit(password) {
    return /\d/.test(password); // At least one digit
  }
  
  function hasSpecialCharacter(password) {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password); // At least one special character
  }
  
  const handleConfirmPasswordChange = (text) => {
    setconfirmpasswd(text);
  };

  const passwordsMatch = enternedNewpassword === confirmpasswd;
  let validationMessage = '';

  if (!passwordsMatch && confirmpasswd.length > 0) {
    validationMessage = 'Passwords do not match';
  }
  console.log(userdata)
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
      <InputeFields
        label={"Enter New Password"}
        placeholder={"Enter New Password"}
        onChangeText={handleNewPasswordChange}
        value={enternedNewpassword}
        secureTextEntry={true}
        numeric={false}
        />
        {enternedNewpassword.length > 0 && <FlatList
            data={hardcodedDetails}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            alwaysBounceVertical={false}
        />}
       {isValid && <InputeFields
        label={"Confirm New Password"}
        placeholder={"Confirm password"}
        onChangeText={handleConfirmPasswordChange}
        value={confirmpasswd}
        secureTextEntry={true}
        numeric={false}
        />}
        {passwordsMatch ? '' : <Text style={styles.validationMessage}>{validationMessage}</Text>}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Buttons
            title="Reset Password"
            onPress={handleVerify}
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
  validationMessage: {
    color: 'red',
  },
  validd: {
    color: 'green',
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

export default Resetpassword;
