import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import Nav from "./Nav";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  // console.disableYellowBox = true;
  
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}

const styles = StyleSheet.create({
});
