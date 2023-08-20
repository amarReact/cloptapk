import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library (FontAwesome in this example)

const Links = ({ title, onPress, iconName, iconPosition }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconPosition === 'left' && iconName && <Icon name={iconName} size={20} color="#3D5EE1" style={styles.icon} />}
      <Text style={styles.buttonText}>{title}</Text>
      {iconPosition === 'right' && iconName && <Icon name={iconName} size={20} color="#3D5EE1" style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // To align icon and text horizontally
    alignItems: 'center', // To vertically center align icon and text
    marginBottom: 10
  },
  buttonText: {
    color: '#3D5EE1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 5, // Add some space to the left or right of the icon
  },
});

export default Links;
