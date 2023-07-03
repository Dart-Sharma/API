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
  const [details, setDetails] = useState({
    name: item.name,
    email: item.email,
    mobile: item.mobile,
    designation: item.designation,
    date_of_joining: item.date_of_joining,
    epf_uan: item.epf_uan,
    esi_number: item.esi_number,
    profile_photo: item.profile_photo,
    date_of_relieving: item.date_of_relieving,
  });

  // const [email, setEmail] = useState(null);
  // const [mobile, setMobile] = useState(null);
  // const [designation, setDesignation] = useState(null);
  // const [date_of_joining, setJoinDate] = useState(null);
  // const [epf_uan, setUAN] = useState(null);
  // const [esi_number, setEsi] = useState(null);
  // const [profile_photo, setPhoto] = useState(null);
  // const [date_of_relieving, setRelieving] = useState(null);

  const handleSubmit = async () => {
    // const payload = {
    //   name: details.name,
    //   email: details.email,
    //   mobile: details.mobile,
    //   designation: details.designation,
    //   date_of_joining: details.date_of_joining,
    //   epf_uan: details.epf_uan,
    //   esi_number: details.esi_number,
    //   profile_photo: details.profile_photo,
    //   date_of_relieving: details.date_of_relieving,
    // };
    const id = item.id;
    fetch(`${BASE_URL}api/update/${id}`, {
      method: "PUT", // or 'PATCH' depending on your API
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert("Update Status", "Update Success");
        console.log("Details updated:");
        // Perform any additional actions after the details are updated
      })
      .catch((error) => {
        Alert.alert("Update Status", "Update Unsuccess");
        console.error("Error updating details:", error);
        // Handle any errors that occur during the update request
      });
  };

  const handleInputChange = (key, value) => {
    setDetails({ ...details, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerHead}>Update Your Details {item.name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        value={details.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        value={details.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Mobile"
        value={details.mobile}
        onChangeText={(text) => handleInputChange("mobile", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Designation"
        value={details.designation}
        onChangeText={(text) => handleInputChange("designation", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter DateOfJoining"
        value={details.date_of_joining}
        onChangeText={(text) => handleInputChange("date_of_joining", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter UAN Number"
        value={details.epf_uan}
        onChangeText={(text) => handleInputChange("epf_uan", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter ESI Number"
        value={details.esi_number}
        onChangeText={(text) => handleInputChange("esi_number", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Choose Your Profile Photo"
        value={details.profile_photo}
        onChangeText={(text) => handleInputChange("profile_photo", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Date Of Relieving"
        value={details.date_of_relieving}
        onChangeText={(text) => handleInputChange("date_of_relieving", text)}
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
