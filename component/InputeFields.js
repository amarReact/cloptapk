import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputeFields = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false, // Default to regular text input
  numeric = false, // Default to regular text input
}) => {
  const inputType = secureTextEntry ? 'password' : numeric ? 'numeric' : 'default';

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={inputType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: '#fff',
  },
});

export default InputeFields;
