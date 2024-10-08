import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const EditUser = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params; 
  const getUserApi = "http://localhost:3000/user"; 

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(`${getUserApi}/${id}`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch user data.");
    }
  };

  const handleInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${getUserApi}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      navigation.navigate("ShowUser"); 
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <Text style={styles.heading}>Edit Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={user.name}
        onChangeText={(value) => handleInput("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInput("email", value)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInput("phone", value)}
        keyboardType="phone-pad"
      />
      <Button title="EDIT" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
  },
});

export default EditUser;
