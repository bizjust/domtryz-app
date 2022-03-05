import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Input, Text } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import Icon from "react-native-vector-icons/AntDesign";
export default function RegisterVer({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 20, justifyContent: "space-between" }}>
        <View>
          <View style={{ marginTop: -10 }}>
            <TouchableOpacity
              style={{ paddingVertical: 12 }}
              onPress={() => {
                navigation.navigate("RegisterCode");
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
              Refer Code
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
            placeholder="Please add your Code"
            textContentType="mobile number"
            inputStyle={{ backgroundColor: "#e0e0e0", padding: 5 }}
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
          <View></View>
          <View style={{ paddingHorizontal: 10, }}>
            <TouchableOpacity
              style={{
                marginTop: 30,
                backgroundColor: "#e234e3",
                borderRadius: 7,
                paddingVertical: 14,
              }}
              onPress={() => {
                navigation.navigate("RegisterEnterPin");//RegisterDomtryz
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
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#e234e3",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 5,
                  textAlign: 'center',
                }}
              >
                Security Verification unavailable?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: "#e234e3",
                fontSize: 20,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
