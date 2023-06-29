//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { TextInput } from "react-native";
import { Button } from "react-native";
import axios from "axios";
import { BASE_URL } from "../Config";

// create a component
const Update = ({ route }) => {
  const { item } = route.params;

  const { isLoading, userToken } = useContext(AuthContext);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [date_of_joining, setJoinDate] = useState(null);
  const [epf_uan, setUAN] = useState(null);
  const [esi_number, setEsi] = useState(null);
  const [profile_photo, setPhoto] = useState(null);
  const [date_of_relieving, setRelieving] = useState(null);

  const handleSubmit = async () => {
    const payload = {
      name: name,
      email: email,
      mobile: mobile,
      designation: designation,
      date_of_joining: date_of_joining,
      epf_uan: epf_uan,
      esi_number: esi_number,
      profile_photo: profile_photo,
      date_of_relieving: date_of_relieving,
    };
    const token = userToken;
    const id = item.id;

    fetch(`${BASE_URL}api/update/${id}`, {
      method: "PUT", // or 'PATCH' depending on your API
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert("Update Status", "Update Success");
        console.log("Details updated:", data);
        // Perform any additional actions after the details are updated
      })
      .catch((error) => {
        Alert.alert("Update Status", "Update Unsuccess");
        console.error("Error updating details:", error);
        // Handle any errors that occur during the update request
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerHead}>Update Your Details {item.name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Mobile"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Designation"
        value={designation}
        onChangeText={(text) => setDesignation(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter DateOfJoining"
        value={date_of_joining}
        onChangeText={(text) => setJoinDate(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter UAN Number"
        value={epf_uan}
        onChangeText={(text) => setUAN(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter ESI Number"
        value={esi_number}
        onChangeText={(text) => setEsi(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Choose Your Profile Photo"
        value={profile_photo}
        onChangeText={(text) => setPhoto(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Date Of Relieving"
        value={date_of_relieving}
        onChangeText={(text) => setRelieving(text)}
      />
      <View style={styles.btn}>
        <Button onPress={handleSubmit} title="Submit" />
      </View>
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
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    padding: 10,
    width: 300,
  },
  containerHead: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  btn: {
    margin: 10,
  },
});

//make this component available to the app
export default Update;
