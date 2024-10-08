import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShowUser = () => {
  const showUserApi = "http://localhost:3000/user"; 
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${showUserApi}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(showUserApi);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch users.");
    }
  };

  const confirmDelete = (id) => {
    Alert.alert("Confirm Delete", "Are you sure you want to delete this user?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => handleDelete(id) },
    ]);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  if (users.length === 0) {
    return <Text>No users found</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{index + 1}</Text>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
            <Text style={styles.text}>{item.phone}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => navigation.navigate("EditUser", { id: item.id })}>
                <Text style={styles.actionText}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("ShowSingleUser", { id: item.id })}>
                <Text style={styles.actionText}>👁️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <Text style={styles.actionText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    padding: 5,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 10,
    fontSize: 18,
  },
  errorText: {
    color: "red",
  },
});

export default ShowUser;