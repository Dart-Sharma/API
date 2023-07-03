//import liraries
import axios from "axios";
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { BASE_URL } from "../Config";
import { Dimensions } from "react-native";
import { Alert } from "react-native";
import Login from "./Login";
// create a component

const Register = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let register = (name, email, password) => {
    axios
      .post(`${BASE_URL}api/auth/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        Alert.alert(
          "Registered Successfully",
          `Hi ${name} you was registered successfully`
        );
        navigation.navigate("Login");
      })
      .catch((e) => {
        Alert.alert(
          "Registered unSuccessFull",
          `Hi ${name} Please check your details.`
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Register</Text>
      <TextInput
        style={styles.inp}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <TextInput
        style={styles.inp}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        style={styles.inp}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
      />
      <Button
        title="submit"
        onPress={() => {
          register(name, email, password);
        }}
      />
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
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    marginBottom: 25,
    textAlign: "center",
  },
  head: {
    marginBottom: 25,
    fontWeight: "bold",
    fontSize: 30,
  },
});

//make this component available to the app
export default Register;
