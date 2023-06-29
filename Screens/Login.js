//import liraries
import React, { Component, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Register from "./Register";
import Home from "./Home";
// create a component

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.inp}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inp}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        style={styles.button}
        onPress={() => {
          login(email, password);
        }}
        title="Login"
      />
      <Text>{login}</Text>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Register")}>
          New user Register Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inp: {
    padding: 1,
    marginBottom: 20,
    borderRadius: 4,
    width: 300,
    borderWidth: 1,
  },
  head: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    width: 300,
  },
});

//make this component available to the app
export default Login;
