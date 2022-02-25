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

export default function PlanConfirmation({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor={"#e234e3"} />
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
              Plan Confirmation
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScanQR");
              }}
            >
              <Icon type="font-awesome" name="image" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={{}}>
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Text h4 style={{ color: "#e234e3" }}>
            Success!
          </Text>
        </View>
        <View>
          <Icon
            type="material-community"
            name="checkbox-marked-circle"
            color={"#e234e3"}
            size={100}
          />
        </View>

        <View style={{ alignItems: "center", paddingTop: 40 }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
            h4
          >
            Plan Payment Successful
          </Text>
          <Text>Your payment has been processed!</Text>
          <Text style={{ marginBottom: 10, }}>Details of transaction are in included below</Text>
          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: "#CCC",
              width: width,
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Text>Transaction Number:</Text>
            <Text>12345678</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: "#CCC",
              width: width,
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Text>Total Amount:</Text>
            <Text>$5000.00</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: "#CCC",
              width: width,
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Text>Paid By:</Text>
            <Text>BTC</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: "#CCC",
              width: width,
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Text>Transaction Date:</Text>
            <Text>22.Aug.2022 05.20pm</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 40, marginBottom: 40 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
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
              <Text style={{ color: "#FFF", textAlign: "center" }}>OK</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
