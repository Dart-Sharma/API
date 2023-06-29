//import liraries
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext'
import React, { Component,useContext, useEffect, useState  } from 'react'
import * as FileSystem from 'expo-file-system';
// create a component
const Logout = () => {
    const {logout}=useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
            <Button title='Logout' onPress={()=>{logout()}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Logout;
