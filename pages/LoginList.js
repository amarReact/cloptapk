import React, { useState , useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";
import InputeFields from "../component/InputeFields";
import Buttons from "../component/Buttons";;
import Messages from "../component/Messages";
import { BASE_URL } from "../redux/constants";
import axios from "axios"
import { AuthContext, AuthProvider } from "../utility/AuthContext";

const LoginList = ({ data }) => {
  const formList = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formList);
  const [errors, setErrors] = useState({});
  const {logIn, logOut} = useContext(AuthContext)
  
  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      loginPostFunc()
      logIn()
    } else {
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
      email: formData?.email,
      password: formData?.password,
      school_id: parseInt(data.split(":")[1]),
    };
    try {
      const response = await axios.post(`${BASE_URL}/login`, userLogin);
      const responseData = response?.data;
      if (responseData.success) {
        const authToken = responseData?.body?.token;
        logIn(authToken, responseData?.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.containerList}>
      <View style={styles.formCss}>
        <InputeFields
          label="User name"
          placeholder="Enter user name"
          value={formData.email}
          onChangeText={(val)=> handleChange('email', val)}
        />
        {errors?.email && <Messages type="error" title={errors?.email} />}
      </View>
   
      <View style={styles.formCss}>
        <InputeFields
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
          value={formData.password}
          onChangeText={(val)=> handleChange('password', val)}
        />
      {errors?.password && <Messages type="error" title={errors?.password} />}
      </View>
      <Buttons title="Continue" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    padding: 0,
    width: "100%",
  },
  formCss: {
    width: "100%",
    marginBottom: 10,
  },
});

export default LoginList;
