import React, { useState } from "react";
import { View, Text, Button,FlatList, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";
import InputeFields from '../component/InputeFields';
import Links from '../component/Links';
import { number } from "prop-types";
const Loginviaotp = () => {
  const navigation = useNavigation();
  const [enternedNewpassword,setenternedNewpassword] = useState('')
  const [buttondisabled,setbuttondisabled] = useState('')
  const [confirmpasswd,setconfirmpasswd] = useState('')
  const [isValid, setIsValid] = useState(false);
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login clicked');
  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Register clicked');
  };
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
      <View style={styles.hellotext}>
          <Text style={styles.pera}>
            Hello & There <Text style={styles.span}>Welcome Back</Text> 
            </Text>
            <View style={styles.buttonin}>
            <Button title="Login" onPress={handleLogin} style={styles.buttonlogin} />
      <Button title="Register" onPress={handleRegister} style={styles.buttonlogin} />
   
          </View>
          </View>
          </View>
        
          <View style={styles.bottomcenter}>
          <Text style={styles.resets}>Login To Your Account</Text> 
      <Text style={styles.enter}>Make sure that you already have an account</Text>
      
      <View style={styles.inputpassword}>
      <InputeFields
       label={"Email Address"}
        placeholder= {"Email Address"}
        onChangeText={(e)=>onChangeText}
        
        />

          <InputeFields
       label={"Password"}
        placeholder= {"Password"}
        onChangeText={(e)=>onChangeText}
        
        />

     </View>
     <View style={styles.forgets}>
      <View style={styles.textContainer}>
        <Text style={styles.Logged}>
          <input type="checkbox" />stay Logged in
        </Text>
      </View>
      <View style={styles.linkContainer}>
        <Links
          title={"Forget Password"}
          onPress={() => navigation.navigate("Forgotpassword")}
          stylee={styles.link}
        />
      </View>
    </View>
    <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Buttons
            title="Login via password"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.button}>
          <Buttons
            title="Login via OTP"
            onPress={() => navigation.navigate("Login")}
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
  </View>
 


    
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5315",
  },
  forgets: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  textContainer: {
    flex: 1, 
  },
  linkContainer: {
    flex: 1, 
  },

  hellotext:{
    width:"90%",
    backgroundColor: "#fe7a4a",
    borderRadius:20,
    padding:20,
    borderWidth: 1,
  borderColor: "#f6561c",
  },
  bottomcenter:{

    backgroundColor: "#ffffff",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    marginTop:30,
    paddingTop:20,
  },
  validationMessage: {
    color: 'red',
  },
  validd: {
    color: 'green',
  },
  buttonin: {
    backgroundColor: "#fe9168", 
    borderRadius: 50,          
    flexDirection: 'row',      
    justifyContent: 'space-around', 
    alignItems: 'center',      
    padding: 5,               
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
  inputpassword:{
    paddingTop:10,
    
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
    color: '#bc6039',
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
    fontSize: 12,
    lineHeight: 18,
    paddingBottom: 20,
    fontWeight: "500",
    color: "#ffc6af",
    textAlign: "center",
    
  },
  span:{
    fontSize: 22,
    lineHeight: 28,
    display:"block", 
  color:"#fff7f8",  
  fontWeight: "400", 
  paddingTop:5,
},
resets:{
  fontSize: 15,
  lineHeight: 20,
  fontWeight: "600",
 paddingLeft:15,
 paddingBottom:5,
},
enter:{
  fontSize: 12,
  lineHeight: 18,
  fontWeight: "400",
 paddingLeft:15,
 color:"#a6a6a6",
 paddingBottom:20,
},
account:{
  fontSize: 14,
  lineHeight: 22,
  fontWeight: "500",
 color:"#2f2e33",

},
Logged:{
    fontSize: 14,
    lineHeight: 15,
    color:"#0c0d11",
    fontWeight:"500",
    paddingLeft:10,
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
  input:{
    padding:5,
    backgroundColor:"red"
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

export default Loginviaotp;