import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>We will help you to grow your business using online server</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff', // Cyan color
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'transparent', // Transparent background to make it hollow
    borderWidth: 5, // Thickness of the border
    borderColor: '#000', // Black border color
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFD700', // Yellow color
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000', // Black text
    fontWeight: 'bold',
    fontSize: 16,
  },
});
