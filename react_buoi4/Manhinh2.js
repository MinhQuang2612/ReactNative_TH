import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

const PasswordGenerator = () => {
  const [length, setLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

  const handleGeneratePassword = () => {
    // Password generation logic can be added here
    alert('Password Generated!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <View style={styles.outputBox}>
        {/* Display the generated password here */}
        <Text style={styles.passwordOutput}></Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          value={length}
          onChangeText={setLength}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Include lower case letters</Text>
        <CheckBox value={includeLowerCase} onValueChange={setIncludeLowerCase} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Include upcase letters</Text>
        <CheckBox value={includeUpperCase} onValueChange={setIncludeUpperCase} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Include number</Text>
        <CheckBox value={includeNumber} onValueChange={setIncludeNumber} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Include special symbol</Text>
        <CheckBox value={includeSpecialSymbol} onValueChange={setIncludeSpecialSymbol} />
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={handleGeneratePassword}>
        <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C2E83',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  outputBox: {
    backgroundColor: '#1A1B47',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordOutput: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: 'white',
    fontSize: 14,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    width: 100,
    textAlign: 'center',
  },
  generateButton: {
    backgroundColor: '#4D49D0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;
