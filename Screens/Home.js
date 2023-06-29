//import liraries
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  FlatList,
} from "react-native";
import { BASE_URL } from "../Config";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// create a component

const Home = ({ navigation }) => {
  const { isLoading, userToken } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    try {
      const token = userToken;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      let response = await fetch(`${BASE_URL}api/employees`, { headers });
      response = await response.json();
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredData = data.filter((item) => item.name.includes(""));

  const deleteWithToken = async (id) => {
    try {
      const token = userToken; // Replace with your token

      const response = await fetch(`${BASE_URL}api/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        Alert.alert("Status", "Unable to delete Data");
        throw new Error("Failed to delete data");
      }

      // Handle successful deletion
      Alert.alert("Status", "Deleted Successfully");
      console.log("Data deleted successfully");
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={styles.newEmployee}>
          <FontAwesome
            onPress={() => navigation.navigate("Create")}
            name="user-plus"
            size={24}
            color="black"
          />
          <Text
            style={styles.newEmployeeText}
            onPress={() => navigation.navigate("Create")}
          >
            Create New Employee
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.holder}>
            <View style={styles.container}>
              <View style={styles.deleteContainer}>
                <Text>ID:{item.id}</Text>
                <TouchableOpacity>
                  <AntDesign
                    name="delete"
                    size={18}
                    color="black"
                    onPress={() => deleteWithToken(item.id)}
                  />
                </TouchableOpacity>
              </View>
              <Text>Name:{item.name}</Text>
              <View style={styles.editContainer}>
                <Text>esi_number:{item.esi_number}</Text>
                <TouchableOpacity>
                  <FontAwesome
                    onPress={() => navigation.navigate("Update", { item })}
                    name="edit"
                    size={18}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Text>Email:{item.email}</Text>
              <Text>Mobile:{item.mobile}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    backgroundColor: "#bbd3ee",
  },
  holder: {
    margin: 10,
  },
  deleteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newEmployee: {
    backgroundColor: "#e0eced",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  newEmployeeText: {
    paddingHorizontal: 10,
    fontSize: 15,
  },
});
//make this component available to the app
export default Home;
