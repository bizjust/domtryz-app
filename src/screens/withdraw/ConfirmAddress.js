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
  Text,
} from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function ConfirmAddress({ route, navigation }) {
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
              Confirm Address
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={{ padding: 20, flex: 1, justifyContent: "space-between" }}>
        <View>
          <Text h4>Your Wallet Address</Text>
          <Text style={{ fontSize: 16, color: "#666", width: 250 }}>
            Please add your address to receive your crypto.
          </Text>
          <View
            style={{
              padding: 7,
              borderWidth: 1,
              borderColor: "#CCC",
              marginVertical: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Recipient Address"
              style={{ width: "70%" }}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ paddingRight: 5 }}>
                <Text style={{ color: "#e234e3", fontWeight: "bold" }}>
                  Paste
                </Text>
              </View>
              <Icon
                type="material-community"
                name="qrcode-scan"
                color={"#e234e3"}
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("WithdrawConfirmation");
            }}
          >
            <LinearGradient
              // Button Linear Gradient
              style={{
                paddingVertical: 12,
                paddingHorizontal: 10,
                width: width - 50,
                borderRadius: 7,
              }}
              colors={["#e234e3", "#3e3477"]}
            >
              <Text style={{ color: "#FFF", textAlign: "center" }}>
                Confirm
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
