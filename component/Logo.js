import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";

const Logo = ({center}) => {
  const navigation = useNavigation();

  const logoImgStyle = center
  ? { marginLeft: "auto", marginRight: "auto", marginBottom: "auto" }
  : {}; 

  return (
    <Pressable style={[logoImgStyle]} onPress={() => navigation.navigate("Login")}>
      <Image
        source={{ uri: "https://cloftware.com/images/clof.png" }}
        style={styles.logoImg}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoImg: {
    width: 200,
    height: 27,
    marginBottom: 0,
  },
});

export default Logo;
