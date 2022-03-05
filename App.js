import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";
// Register
import RegisterHome from "./src/screens/auth/login/register/RegisterHome";
import RegisterForm from "./src/screens/auth/login/register/RegisterForm";
import RegisterMobile from "./src/screens/auth/login/register/RegisterMobile";
import RegisterVer from "./src/screens/auth/login/register/RegisterVer";
import RegisterCode from "./src/screens/auth/login/register/RegisterCode";
import RegisterDomtryz from "./src/screens/auth/login/register/RegisterDomtryz";
// import RegisterPicker from "./src/screens/auth/login/register/RegisterPicker";
// END Register

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
import SecuritySettings from "./src/screens/settings/security/SecuritySettings";
import VerifyRecoveryPhrase from "./src/screens/settings/security/VerifyRecoveryPhrase";
import YourRecoveryPhrase from "./src/screens/settings/security/YourRecoveryPhrase";
import EnterPin from "./src/screens/settings/security/EnterPin";
import Prices from "./src/screens/settings/Prices";
import Activity from "./src/screens/activity/Activity";
import ReferFriend from "./src/screens/refer/ReferFriend";
import ReferralsDetails from "./src/screens/refer/ReferralsDetails";
import RegisterEnterPin from "./src/screens/auth/login/register/RegisterEnterPin";
import RegisterRecoveryPhrase from "./src/screens/auth/login/register/RegisterRecoveryPhrase";
import RegisterVerifyRecoveryPhrase from "./src/screens/auth/login/register/RegisterVerifyRecoveryPhrase";

const Stack = createNativeStackNavigator();

export default function App() {

  console.disableYellowBox = true;
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />

        <Stack.Screen
          name="RegisterHome"
          options={{ headerShown: false }}
          component={RegisterHome}
        />
        <Stack.Screen
          name="RegisterForm"
          options={{ headerShown: false }}
          component={RegisterForm}
        />
        <Stack.Screen
          name="RegisterMobile"
          options={{ headerShown: false }}
          component={RegisterMobile}
        />
        <Stack.Screen
          name="RegisterVer"
          options={{ headerShown: false }}
          component={RegisterVer}
        />
        <Stack.Screen
          name="RegisterCode"
          options={{ headerShown: false }}
          component={RegisterCode}
        />
        <Stack.Screen
          name="RegisterDomtryz"
          options={{ headerShown: false }}
          component={RegisterDomtryz}
        />
        <Stack.Screen
          name="RegisterEnterPin"
          options={{ headerShown: false }}
          component={RegisterEnterPin}
        />
        <Stack.Screen
          name="RegisterRecoveryPhrase"
          options={{ headerShown: false }}
          component={RegisterRecoveryPhrase}
        />
        <Stack.Screen
          name="RegisterVerifyRecoveryPhrase"
          options={{ headerShown: false }}
          component={RegisterVerifyRecoveryPhrase}
        />
        {/* <Stack.Screen
          name="RegisterPicker"
          options={{ headerShown: false }}
          component={RegisterPicker}
        /> */}
        
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
        <Stack.Screen
          name="SecuritySettings"
          options={{ headerShown: false }}
          component={SecuritySettings}
        />
        <Stack.Screen
          name="VerifyRecoveryPhrase"
          options={{ headerShown: false }}
          component={VerifyRecoveryPhrase}
        />
        <Stack.Screen
          name="YourRecoveryPhrase"
          options={{ headerShown: false }}
          component={YourRecoveryPhrase}
        />
        <Stack.Screen
          name="EnterPin"
          options={{ headerShown: false }}
          component={EnterPin}
        />
        <Stack.Screen
          name="Prices"
          options={{ headerShown: false }}
          component={Prices}
        />
        <Stack.Screen
          name="Activity"
          options={{ headerShown: false }}
          component={Activity}
        />
        <Stack.Screen
          name="ReferFriend"
          options={{ headerShown: false }}
          component={ReferFriend}
        />
        <Stack.Screen
          name="ReferralsDetails"
          options={{ headerShown: false }}
          component={ReferralsDetails}
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
