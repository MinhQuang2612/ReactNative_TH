import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUser from "./components/User/CreateUser";
import ShowUser from "./components/User/ShowUser";
import EditUser from "./components/User/EditUser";
import Header from "./components/Common/Header";
import Home from "./components/Layout/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="ShowUser" component={ShowUser} />
        <Stack.Screen name="EditUser" component={EditUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
