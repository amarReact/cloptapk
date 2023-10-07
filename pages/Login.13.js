import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Picker,
  Pressable,
  ActionSheetIOS,
  StatusBar,
} from "react-native";
import InputeFields from "../component/InputeFields";
import Buttons from "../component/Buttons";
import SelectBox from "../component/SelectBox";
import Messages from "../component/Messages";
import Icon from "react-native-vector-icons/MaterialIcons";
import Links from "../component/Links";
import LoginList from "./LoginList";
import { BASE_URL, BASE_URL_SCHOOL } from "../redux/constants";
import Toster from "../component/Toster";
import axios from "axios";
import Logo from "../component/Logo";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [getSchoolCode, setGetSchoolCode] = useState([]);
  const [selectSchool, setSelectSchool] = useState("");

  const options =
    getSchoolCode &&
    getSchoolCode?.body?.map((item, ind) => {
      return {
        label: `${item?.school_name_code} : ${item?.scl_id}`,
        value: `${item?.school_name_code} : ${item?.scl_id}`,
      };
    });

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleLogin = () => setIsOpen(!isOpen);

  const handleLinkPress = () => {
    console.log("Link pressed!");
  };

  const schoolSelectFunc = async () => {
    try {
      const respons = await axios.post(
        `${BASE_URL_SCHOOL}/get_school_name_code`
      );
      setGetSchoolCode(respons?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    schoolSelectFunc();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009' barStyle="#000" />
      <Logo center />

      {selectedValue && <Text style={styles.headingTop}>{selectedValue}</Text>}
      <Text style={styles.heading}>
        Enter your credentials to access your account
      </Text>

      {!isOpen ? (
        <View style={styles.formCss}>
          <SelectBox
            options={options}
            selectedValue={selectedValue || "Select Your School..."}
            onSelect={handleSelect}
          />
          <View style={styles.sAdminClass}>
            <Links
              title="Super Admin"
              onPress={handleLinkPress}
              iconName="podcast"
              iconPosition="left"
            />
          </View>
          <Buttons
            disabled={selectedValue ? false : true}
            title="Continue"
            onPress={handleLogin}
          />
        </View>
      ) : (
        <LoginList data={selectedValue} />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 25,
    width: "100%",
  },
  heading: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "600",
  },
  headingTop: {
    fontSize: 18,
    marginBottom: 20,
    color: "#ff5315",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedValue: {
    fontSize: 14,
    marginTop: 10,
  },
  formCss: {
    width: "100%",
    color: "#B91C1C",
  },
  adminClass: {
    flex: 1,
    width: "auto",
    marginLeft: "auto",
    justifyContent: "flex-end",
  },
  sAdminClass: {
    marginTop: 10,
    flex: 1,
    width: "auto",
    marginLeft: "auto",
    justifyContent: "flex-end",
  },
});

export default Login;
