import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Icon, Input, ListItem, Text } from "react-native-elements";
const { width, height } = Dimensions.get("window");
// ScanQR
export default function ConfirmSend({ navigation }) {
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
              Confirm Send
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScanQR");
              }}
            >
              {/* <Text style={{ color: "#FFF" }}>Next</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View>
          <View style={{ padding: 20 }}>
            <Text h3 style={{ textAlign: "center" }}>
              0.00123456 BTC
            </Text>
            <Text h4 style={{ textAlign: "center" }}>
              US$ 200.00
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#CCC",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#666" }}>From</Text>
            <Text style={{ fontWeight: "bold", color: "#666" }}>
              BTC Private Key Wallet
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#CCC",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#666" }}>Send To</Text>
            <View style={{ width: "70%" }}>
              <Text
                style={{ fontWeight: "bold", color: "#666" }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                mr66pHzbmZaLaAFctqQQaLUZETbzKfVU2y
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#CCC",
                width: "100%",
                borderRadius: 4,
                borderBottomEndRadius: 0,
                borderBottomStartRadius: 0,
                paddingVertical: 25,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                Network fees - Priority{" "}
              </Text>
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                ~ US$ 10{" "}
              </Text>
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                <Icon type="font-awesome" name="angle-down" color={"#666"} />
              </Text>
            </View>
            <View
              style={{
                padding: 20,
                borderWidth: 1,
                borderColor: "#CCC",
                width: "100%",
                borderRadius: 4,
                backgroundColor: "#CCC",
                borderTopEndRadius: 0,
                borderTopStartRadius: 0,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                Network fees are set by the Bitcoin network.
              </Text>
              <TouchableOpacity>
                <Text style={{ fontWeight: "bold", color: "#06f" }}>
                  Learn more about fees.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#CCC",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#666" }}>Total</Text>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                US$ 210.00
              </Text>
              <Text style={{ fontWeight: "bold", color: "#666" }}>
                0.00123456 BTC
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', paddingVertical: 40, }}>
            <TouchableOpacity
              style={{ paddingVertical: 12 }}
              onPress={() => {
                navigation.navigate("ScanQR");
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
                  Send Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
