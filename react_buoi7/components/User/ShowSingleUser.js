import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

const ShowSingleUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { id } = route.params; 
 const getUserApi = `http://localhost:3000/user/${id}`;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(getUserApi);
      setUser(response.data);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to load user data");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      {user ? (
        <View style={styles.userDetails}>
          <Text style={styles.detail}>Name: {user.name}</Text>
          <Text style={styles.detail}>Email: {user.email}</Text>
          <Text style={styles.detail}>Phone: {user.phone}</Text>
        </View>
      ) : (
        <Text>No user found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userDetails: {
    backgroundColor: "#f8f8f8",
    padding: 16,
    borderRadius: 8,
  },
  detail: {
    fontSize: 18,
    
    marginVertical: 4,
  },
});

export default ShowSingleUser;