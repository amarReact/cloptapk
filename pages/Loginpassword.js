import React, { useState } from "react";
import { View, Text, Button,FlatList, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";
import InputeFields from '../component/InputeFields';
import Links from '../component/Links';
import { number } from "prop-types";

const Loginpassword = () => {
  const navigation = useNavigation();
  const [enternedNewpassword,setenternedNewpassword] = useState('')
  const [buttondisabled,setbuttondisabled] = useState('')
  const [confirmpasswd,setconfirmpasswd] = useState('')
  const [isValid, setIsValid] = useState(false);

const hardcodedDetails = [
  { id: '1',description: 'At Least one Capital letter' },
  { id: '2',description: 'At Least one Small letter' },
  { id: '3',description: 'Minimum 8 charcters required' },
  { id: '3',description: 'At Least one Digit' },
  { id: '3', description: 'At Least one Special Charecter' },
  // Add more items as needed
];
  const handleVerify = () => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    console.log('OTP is ', otp);

  }
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* //<Text style={styles.name}>{item.name}</Text> */}
      <Text style={isValid ? styles.validd : styles.validationMessage}>{item.description}</Text>
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
      <Text style={styles.resets}>Log In</Text> 
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
     
        {passwordsMatch ? '' : <Text style={styles.validationMessage}>{validationMessage}</Text>}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Buttons
            title="Log In with Password"
            onPress={handleVerify}
          />
        
        
      <View style={styles.buttonContainer2}>
        <View style={styles.button}>
          <Buttons
            title="Log In via OTP"
            onPress={handleVerify}
          />
        </View>
        <View style={styles.bottomtext}>
        <Text style={styles.account}>Dont't have an account? <Text style={styles.signin}>SignUp</Text></Text>
        </View>
        <View style={styles.bottomimg}>
          <Text style={styles.heading}>Powered By:</Text>
          <Logo />
        </View>
        </View>
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
  buttonContainer2:{
    width:'100%',
   backgroundColor:"none",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  bottomtext :{
    marginTop:12,
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
 paddingLeft:15,
 paddingBottom:5,
},
enter:{
  fontSize: 14,
  lineHeight: 22,
  fontWeight: "400",
 paddingLeft:15,
 color:"#a6a6a6",
 paddingBottom:20,
},
account:{
  fontSize: 14,
  lineHeight: 22,
  fontWeight: "500",
 color:"#1e1e1e",

},
signin:{
  fontSize: 14,
  lineHeight: 22,
  fontWeight: "600",
 color:"#d85d33",
 
},
heading: {
  fontSize: 16,
  marginBottom: 10,
  fontWeight: "500",
  marginTop: 10,
  color: "#FF5315",
  textAlign:'center'
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

export default Loginpassword;
