import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../component/Logo";

const Teacher = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.boxDv}>
        <Image
          source={{ uri: "https://cloftware.com/images/abc.png" }}
          style={styles.image}
        />
        <Text style={styles.pera}>
          We are a team of skilled professionals with 10+ years of experience in
          cloud-based solutions. Our technical expertise and customer-centric
          approach have enabled us to successfully deliver multiple projects
          across diverse industries.sdffszfsf
        </Text>
      </View>

      <Text style={styles.heading}>Welcome Cloftware Technology</Text>

      <Buttons
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: "#F1F5F7",
  },
  boxDv: {
    textAlign: "center",
    marginTop: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
    marginTop: "auto",
    color: "#FF5315",
  },
  pera: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
    fontWeight: "400",
    color: "#34495E",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
  logoImg: {
    width: 200,
    height: 27,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#FF5315",
    borderRadius: 5,
    width: "100%", // Set the desired width
    height: 40, // Set the desired height
    justifyContent: "center", // Center the button's content vertically
    alignItems: "center",
    elevation: 0, // Center the button's content horizontally
  },
});

export default Teacher;
