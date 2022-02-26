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

export default function SecuritySettings({ navigation }) {
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
            //   navigation.navigate("BuyBTC");
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Passcode</ListItem.Title>
            </ListItem.Content>
            <View>
            <Switch value={true} color="#CCC" thumbColor={"#e234e3"} />
            </View>
          </ListItem>


          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate("VerifyRecoveryPhrase");
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Recover Phrase</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>


          <ListItem
            bottomDivider
            onPress={() => {
            //   navigation.navigate("BuyBTC");
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Transaction Signing</ListItem.Title>
            </ListItem.Content>
            <View>
              <Switch value={true} color="#CCC" thumbColor={"#e234e3"} />
            </View>
          </ListItem>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
