import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Text style={styles.brand}>React CRUD</Text>
      <View style={styles.navItems}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CreateUser")}>
          <Text style={styles.navLink}>Create User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ShowUser")}>
          <Text style={styles.navLink}>Show User</Text>
        </TouchableOpacity>
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#343a40",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    color: "#fff",
    fontSize: 20,
  },
  navItems: {
    flexDirection: "row",
  },
  navLink: {
    color: "#fff",
    marginLeft: 15,
  },
});

export default Header;
