import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Nav from "./Nav";

export default function App() {

  console.disableYellowBox = true;
  
  return (
    <SafeAreaProvider>
      <Nav />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
