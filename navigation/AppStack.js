import { View, Text, StyleSheet, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import React, { Component,useContext, useEffect, useState  } from 'react'
import * as FileSystem from 'expo-file-system';



const AppStack = () => {
  const {logout}=useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>AppStack</Text>
      <Button title='Logout' onPress={()=>{logout()}}/>
    </View>
  )
}

export default AppStack

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});