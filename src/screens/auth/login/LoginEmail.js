import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon, Input, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginEmail({ navigation }) {
  return (
    <View style={{ flex:1 }}>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{ paddingVertical: 10, paddingHorizontal: 30 }}
        >
          <Text style={{ color: "#e234e3", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex:1, padding: 20, justifyContent: "space-between" }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Text h4>Login</Text>
            <TouchableOpacity>
                <Text style={{ color: "#e234e3", fontWeight: "bold" }}>
                Log in with mobile
                </Text>
            </TouchableOpacity>
          </View>
          <Input
            label="Email"
            placeholder="Please enter email"
            textContentType="emailAddress"
            inputStyle={{ backgroundColor: "#e0e0e0", padding: 5 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <Input
            label="Password"
            placeholder="Please enter your password"
            textContentType="password"
            secureTextEntry
            inputStyle={{ backgroundColor: "#e0e0e0", padding: 5 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <TouchableOpacity>
            <Text style={{ color: "#e234e3", fontWeight: "bold" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => {
                navigation.navigate("HomeScreen");
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
            <Icon type="fontisto" name="arrow-right" color={'#FFF'} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
