import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../Config";
import { View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNav from "../navigation/AppNav";

export const AuthContext = createContext();

export const AuthProvider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}api/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        let userToken = res.data;
        setUserToken(userToken);
        console.log(userToken);
        AsyncStorage.setItem("userToken", userToken);
        Alert.alert("Login Status", `${email}Login Success`);
      })
      .catch((e) => {
        Alert.alert("Login Status", `${email} unSuccessFull`);
        console.log(`error in user login token, ${e}`);
      });
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
    console.log("logout");
  };
  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      setIsLoading(false);
      if (userToken !== null) {
        setUserToken(userToken);
      }
    } catch (error) {
      console.log(`is logged in error ${error}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      <AppNav />
    </AuthContext.Provider>
  );
};
