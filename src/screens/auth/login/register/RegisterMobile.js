import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon, Input, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "react-native";
export default function RegisterMobile({ navigation }) {

  const next = async () => {
    // navigation.navigate("RegisterCode");
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{ paddingVertical: 12, marginTop: 10 }}
          onPress={() => {
            navigation.navigate("RegisterForm");
          }}
        >
          <Icon name="close" size={30} color="black"></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingHorizontal: 30 }}>
          <Text style={{ color: "#e234e3", fontWeight: "bold", fontSize: 20 }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, padding: 20, justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 35, fontWeight: "bold", marginLeft: 10 }}>
            Register
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 20,
            }}
          >
            <TouchableOpacity style={{ marginRight: 15, marginTop: 30, marginBottom: -20, zIndex: 99, }} onPress={()=>{ navigation.navigate("RegisterForm"); }} >
              <Text
                style={{
                  color: "#e234e3",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Register with email
              </Text>
            </TouchableOpacity>
          </View>
          <Input
            label="Mobile"
            placeholder="+1 Mobile Number"
            textContentType="emailAddress"
            inputStyle={{
              backgroundColor: "#e0e0e0",
              padding: 10,
              borderRadius: 4,
              marginTop: 5,
            }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <Input
            label="Password"
            placeholder="Please enter password"
            textContentType="password"
            secureTextEntry
            inputStyle={{
              backgroundColor: "#e0e0e0",
              padding: 10,
              borderRadius: 4,
              marginTop: 5,
            }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            errorStyle={{ display: 'none', }}
          />
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#e234e3",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 15,
                }}
              >
                Referrel ID (Options)
              </Text>
            </TouchableOpacity>
            <View style={{ width: 30, marginTop: -12 }}>
              <Picker style={{ color: "#e234e3" }}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{  }}
            onPress={async () => {
              await next();
            }}
          >
            <LinearGradient
              // Button Linear Gradient
              style={{
                paddingVertical: 10,
                paddingHorizontal: 18,
                borderRadius: 7,
              }}
              colors={["#999", "#999"]}
            >
              <Icon type="fontisto" name="arrow-right" color={"#FFF"} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
