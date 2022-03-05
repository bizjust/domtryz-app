import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Input, Text } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import Icon from "react-native-vector-icons/AntDesign";

export default function RegisterCode({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 20, justifyContent: "space-between" }}>
        <View>
          <View style={{ marginTop: -10 }}>
            <TouchableOpacity
              style={{ paddingVertical: 12 }}
              onPress={() => {
                navigation.navigate("RegisterMobile");
              }}
            >
              <Icon name="arrowleft" size={30} color="black"></Icon>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "#000",
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 40,
                marginTop: 20,
              }}
            >
              Verification
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
              }}
            >
              Code will be sent to +1256*****522.
            </Text>
          </View>
          <Input
            style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 18 }}
            placeholder="Mobile verification code"
            textContentType="mobile number"
            inputStyle={{
              backgroundColor: "#e0e0e0",
              padding: 10,
              marginTop: -5,
              borderRadius: 4,
            }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: "#e234e3",
                fontWeight: "bold",
                paddingLeft: 13,
                marginTop: -20,
              }}
            >
              Voice Verification
            </Text>
          </TouchableOpacity>
          <View>
            <View style={{ paddingHorizontal: 10 }}>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: "#e234e3",
                  borderRadius: 7,
                  paddingHorizontal: 10,
                  paddingVertical: 14,
                }}
                onPress={() => {
                  navigation.navigate("RegisterVer");
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#e234e3",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                Security Verification unavailable?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
