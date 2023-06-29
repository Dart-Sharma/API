//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
// create a component
const Logo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animate-spin
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      <StatusBar style="auto" />
        <View style={styles.container}>
     <TouchableOpacity>
     <AntDesign style={styles.button}  onPress={() => setModalVisible(false)} name="closecircle" size={24} color="black" />
      </TouchableOpacity>

        <View style={styles.userDetails}>
          <Image
            source={require("./rose-320868_1280.jpg")}
            style={{ width: 100, height: 100, margin: 20, borderRadius: 50 }}
          />        
            <Text style={styles.userDetailsName}>UserName</Text>
            <Text style={styles.userDetailsEmail}>Email Id</Text>
          </View>
          <View style={styles.operations}>
            <Text style={styles.operationsHead}>Create</Text>
            <Text style={styles.operationsHead}>Read</Text>
            <Text style={styles.operationsHead}>Update</Text>
            <Text style={styles.operationsHead}>Delete</Text>
            <Text style={styles.operationsHead}>Logout</Text>
          </View>
         </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require("./rose-320868_1280.jpg")}
          style={{ width: 40, height: 40, margin: 20, borderRadius: 50 }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ebebe0',
    height:900,
  },
  userDetails:{
    alignItems: "center",
    marginBottom:10,
  },
  operations:{
    marginLeft:10,
    marginBottom:10,
  },
  operationsHead:{
    fontWeight:'bold',
    fontSize:15,
    marginBottom:10,
  },
  userDetailsName:{
    fontWeight:'bold',
    fontSize:18,
  },
  button:{
    margin:5,
    marginLeft:360,
    marginBottom:0,
    color:'#0b0b0b',
  },
});

//make this component available to the app
export default Logo;
