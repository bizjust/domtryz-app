import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon, Input, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { createNextState } from "@reduxjs/toolkit";
import {
  addRegisterEmail,
  addRegisterPassword,
  addUser,
} from "../../../../store/slicers/userSlice";
import axios from "axios";
import { Snackbar } from "react-native-paper";
import Constants from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [snackMeg, setSnackMeg] = useState("");
  const d = useSelector((state) => state.user.registerData);
  const dispatch = useDispatch();

  useEffect(async () => {
    // console.log("RegisterForm", d);
    console.log(await AsyncStorage.getItem("token"));
  }, []);

  const next = async () => {
    // console.log("Email:",email, ", Password:", password);
    if (email !== "" && password !== "") {
      await axios
        .post(Constants.manifest.extra.api_url + "stepEmailPassword", {
          email: email,
          password: password,
          country_id: d.country_id,
        })
        .then(async (res) => {
          console.log("res", res);
          dispatch(addRegisterEmail(email));
          dispatch(addRegisterPassword(password));
          if (res.data.success) {
            console.log("Success", res.data.user);
            console.log("Token", res.data.token);
            // console.log(d);
            await AsyncStorage.setItem("token", res.data.token);
            dispatch(addUser(res.data.user));
            navigation.navigate("RegisterCode");
          } else {
            console.log("Error", res);
          }
        }).catch((err) => { console.log("Error1", err); });

      
    } else {
      setSnackMeg("Please fill all fields");
      setVisible(true);
    }
  };

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
            navigation.navigate("RegisterHome");
          }}
        >
          <Icon name="close" size={30} color="black"></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingHorizontal: 30, zIndex: 99 }}>
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
            <TouchableOpacity
              style={{
                marginRight: 15,
                marginTop: 30,
                marginBottom: -20,
                zIndex: 99,
              }}
              onPress={() => {
                navigation.navigate("RegisterMobile");
              }}
            >
              <Text
                style={{ color: "#e234e3", fontWeight: "bold", fontSize: 15 }}
              >
                Register with mobile
              </Text>
            </TouchableOpacity>
          </View>
          <Input
            label="Email"
            placeholder="Please enter email"
            textContentType="emailAddress"
            onChangeText={(text) => { setEmail(text); }}
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
            onChangeText={(text) => { setPassword(text); }}
            secureTextEntry
            inputStyle={{
              backgroundColor: "#e0e0e0",
              padding: 10,
              borderRadius: 4,
              marginTop: 5,
            }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            errorStyle={{ padding: 0, display: "none" }}
          />
          <View style={{ flexDirection: "row" }}>
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
            style={{}}
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
      <Snackbar
        visible={visible}
        duration={3000}
        action={{
          label: "Dismiss",
          onPress: () => {
            setVisible(false);
          },
        }}
        onDismiss={() => {
          setVisible(false);
        }}
      >
        {snackMeg}
      </Snackbar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
