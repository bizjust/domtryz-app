import {
  Alert,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Avatar,
  Icon,
  Input,
  LinearProgress,
  ListItem,
  Overlay,
  Switch,
  Text,
} from "react-native-elements";
const { width, height } = Dimensions.get("window");
import DropDownPicker from "react-native-dropdown-picker";
import BottomTabs from "../shared/BottomTabs";
import { logout } from "../../../http";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("usd");
  const [items, setItems] = useState([
    { label: "USD", value: "usd" },
    { label: "GBP", value: "gbp" },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={"#e234e3"}
      />
      <LinearGradient
        // Button Linear Gradient
        style={{ width: width, paddingVertical: 30, paddingHorizontal: 10 }}
        colors={["#e234e3", "#3e3477"]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon type="ant-design" name="arrowleft" color={"#FFF"} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "#FFF" }} h4>
              Settings
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View>
          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#89CCD1",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="font-awesome" name="bitcoin" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Wallets</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate("SecuritySettings");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#4A4A4A",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="ant-design" name="lock" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Security</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate("Prices");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#E466DF",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="material-community" name="chart-line-stacked" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Prices</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
            //   navigation.navigate("BuyBTC");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#FE3E2F",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="entypo" name="notification" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Push Notification</ListItem.Title>
            </ListItem.Content>
            <View>
              <Switch value={false} color="#e234e3" />
            </View>
          </ListItem>

          <ListItem
            style={{ zIndex: 999, overflow: "visible" }}
            bottomDivider
            onPress={() => {
            //   navigation.navigate("BuyBTC");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#EFEEEE",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon
                type="material-community"
                name="currency-sign"
                color={"#57BDDB"}
              />
            </View>
            <ListItem.Content>
              <ListItem.Title>Main Currency</ListItem.Title>
            </ListItem.Content>
            <View>
              <DropDownPicker
                style={{
                  width: 80,
                  zIndex: 99999,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 3.0,

                  elevation: 5,
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#FFC70C",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="font-awesome" name="dollar" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Price Alerts</ListItem.Title>
            </ListItem.Content>
            <View>
              <Switch value={false} color="#e234e3" />
            </View>
          </ListItem>


          <ListItem
            bottomDivider
            onPress={async () => {
              const {data} = await logout();
              if(data.success){
                await AsyncStorage.removeItem('token');
                navigation.navigate("LoginHome");
              }
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#E466DF",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="material-community" name="logout" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Logout</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderTopWidth: 1,
              backgroundColor: "#FFF",
              borderBottomWidth: 1,
              borderColor: "#CCC",
            }}
          >
            <Text
              style={{ fontSize: 18, color: "#7D6AEE", fontWeight: "bold" }}
            >
              Job Community
            </Text>
          </View>

          <ListItem
            bottomDivider
            onPress={() => {
                
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#FE3E2F",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="entypo" name="help" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Help Center</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
            //   navigation.navigate("BuyBTC");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#58A9DE",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="entypo" name="twitter" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Twitter</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
            //   navigation.navigate("BuyBTC");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#36589B",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon type="font-awesome" name="facebook" color={"#FFF"} />
            </View>
            <ListItem.Content>
              <ListItem.Title>Facebook</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <ListItem
            bottomDivider
            onPress={() => {
            //   navigation.navigate("BuyBTC");
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#26A9DE",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Icon
                type="font-awesome-5"
                name="telegram-plane"
                color={"#FFF"}
              />
            </View>
            <ListItem.Content>
              <ListItem.Title>Telegram</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
        <View style={{ marginBottom: 100, }}></View>
      </ScrollView>
      <BottomTabs navigation={navigation} activeTab="settings" />
    </View>
  );
}

const styles = StyleSheet.create({});
