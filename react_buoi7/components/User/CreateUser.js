import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateUser = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const createUserApi = "http://localhost:3000/user"; 

  const handleInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(createUserApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      setUser({ name: "", email: "", phone: "" });

      navigation.navigate("ShowUser");
      Alert.alert("Success", "User created successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <TextInput
        placeholder="Name"
        onChangeText={(value) => handleInput("name", value)}
        style={styles.input}
        value={user.name}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(value) => handleInput("email", value)}
        style={styles.input}
        value={user.email}
      />
      <TextInput
        placeholder="Phone"
        onChangeText={(value) => handleInput("phone", value)}
        style={styles.input}
        value={user.phone}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 12, paddingHorizontal: 10 },
});

export default CreateUser;
