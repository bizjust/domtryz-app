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
import SendBTC from "./src/screens/send/SendBTC";
import ScanQR from "./src/screens/send/ScanQR";
import SentBTC from "./src/screens/send/SentBTC";
import SearchReceive from "./src/screens/receive/SearchReceive";
import ReceiveBTC from "./src/screens/receive/ReceiveBTC";
import SearchBuy from "./src/screens/buy/SearchBuy";
import BuyBTC from "./src/screens/buy/BuyBTC";
import Providers from "./src/screens/buy/Providers";
import BuyWebView from "./src/screens/buy/BuyWebView";
import BuyBTCSuccess from "./src/screens/buy/BuyBTCSuccess";
import Plans from "./src/screens/investment/Plans";
import PlanDetails from "./src/screens/investment/PlanDetails";
import PlanConfirmation from "./src/screens/investment/PlanConfirmation";
import Withdraw from "./src/screens/withdraw/Withdraw";
import ConfirmAddress from "./src/screens/withdraw/ConfirmAddress";
import WithdrawConfirmation from "./src/screens/withdraw/WithdrawConfirmation";
import Settings from "./src/screens/settings/Settings";

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
        <Stack.Screen
          name="SendBTC"
          options={{ headerShown: false }}
          component={SendBTC}
        />
        <Stack.Screen
          name="ScanQR"
          options={{ headerShown: false }}
          component={ScanQR}
        />
        <Stack.Screen
          name="SentBTC"
          options={{ headerShown: false }}
          component={SentBTC}
        />
        <Stack.Screen
          name="SearchReceive"
          options={{ headerShown: false }}
          component={SearchReceive}
        />
        <Stack.Screen
          name="ReceiveBTC"
          options={{ headerShown: false }}
          component={ReceiveBTC}
        />
        <Stack.Screen
          name="SearchBuy"
          options={{ headerShown: false }}
          component={SearchBuy}
        />
        <Stack.Screen
          name="BuyBTC"
          options={{ headerShown: false }}
          component={BuyBTC}
        />
        <Stack.Screen
          name="Providers"
          options={{ headerShown: false }}
          component={Providers}
        />
        <Stack.Screen
          name="BuyWebView"
          options={{ headerShown: false }}
          component={BuyWebView}
        />
        <Stack.Screen
          name="BuyBTCSuccess"
          options={{ headerShown: false }}
          component={BuyBTCSuccess}
        />
        <Stack.Screen
          name="Plans"
          options={{ headerShown: false }}
          component={Plans}
        />
        <Stack.Screen
          name="PlanDetails"
          options={{ headerShown: false }}
          component={PlanDetails}
        />
        <Stack.Screen
          name="PlanConfirmation"
          options={{ headerShown: false }}
          component={PlanConfirmation}
        />
        <Stack.Screen
          name="Withdraw"
          options={{ headerShown: false }}
          component={Withdraw}
        />
        <Stack.Screen
          name="ConfirmAddress"
          options={{ headerShown: false }}
          component={ConfirmAddress}
        />
        <Stack.Screen
          name="WithdrawConfirmation"
          options={{ headerShown: false }}
          component={WithdrawConfirmation}
        />
        <Stack.Screen
          name="Settings"
          options={{ headerShown: false }}
          component={Settings}
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
