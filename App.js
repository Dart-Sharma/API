import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Login";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";
import { AppRegistry } from "react-native";
import Register from "./Screens/Register";

AppRegistry.registerComponent("Employee", () => AppNav);

export default function App() {
  return <AuthProvider/>;
}

const styles = StyleSheet.create({});
