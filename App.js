import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";
import LoginHome from "./src/screens/auth/login/LoginHome";
import LoginEmail from "./src/screens/auth/login/LoginEmail";
import LoginPhone from "./src/screens/auth/login/LoginPhone";
import HomeScreen from "./src/screens/HomeScreen";
import SearchCoin from "./src/screens/send/SearchCoin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" >
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="LoginHome"
          options={{ headerShown: false }}
          component={LoginHome}
        />
        <Stack.Screen
          name="LoginEmail"
          options={{ headerShown: false }}
          component={LoginEmail}
        />
        <Stack.Screen
          name="LoginPhone"
          options={{ headerShown: false }}
          component={LoginPhone}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="SearchCoin"
          options={{ headerShown: false }}
          component={SearchCoin}
        />
        {/* <StatusBar style="auto" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
