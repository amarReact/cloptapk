// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>This is the Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'lightgray', // Customize the background color
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
