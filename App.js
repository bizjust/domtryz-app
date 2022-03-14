import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import Nav from "./Nav";

export default function App() {

  console.disableYellowBox = true;
  
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}

const styles = StyleSheet.create({
});
