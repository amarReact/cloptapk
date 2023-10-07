import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';


const Buttons = ({children, title, onPress, disabled, ...rest }) => {
  const containerStyles = [styles.button];
  const textStyles = [styles.buttonText];

  if (disabled) {
    containerStyles.push(styles.disabledButton);
    textStyles.push(styles.disabledButtonText);
  }

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
     {children ? children : <Text style={textStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5315',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Change color for disabled state
  },
  disabledButtonText: {
    color: '#999', // Change text color for disabled state
  },
});

export default Buttons;
