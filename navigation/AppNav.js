import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Logout from "../Screens/Logout";
import Logo from "../context/Logo";
import Register from "../Screens/Register";
import Create from "../Operations/Create";
import Update from "../Operations/Update";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root(token) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerRight: () => <Logo /> }}
      initialRouteName="Home"
      options={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? (
        <Stack.Navigator>
          <Stack.Screen
            data={userToken}
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Update"
            component={Update}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNav;
