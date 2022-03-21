import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Text } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "expo-constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../store/slicers/userSlice";

export default function RegisterCode({ navigation }) {

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  useEffect(async () => {
    const t = await AsyncStorage.getItem("token");
    setToken(t);
    console.log(token);

    await axios
        .get(Constants.manifest.extra.api_url + "user", {
          headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        })
        .then(async (res) => {
          console.log("res", res);
          if (res.data.success) {
            setUser(res.data.user);
            console.log("User", user);
          } else {
            console.log("Error", res);
          }
        }).catch((err) => { console.log("Error1", err); });

  }, []);

  const submit = async () => {
    // navigation.navigate("RegisterVer");
    console.log("Code:", code, user.verify_code);
    if(Number(user.verify_code) === Number(code)){
      // navigation.navigate("RegisterVer");
      await axios
        .get(Constants.manifest.extra.api_url + "verifyUser", {
          headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        })
        .then(async (res) => {
          console.log("res", res);
          if (res.data.success) {
            // setUser(res.data.user);
            // console.log("User 1", user);
            dispatch(addUser(res.data.user));
            navigation.navigate("RegisterVerifyRecoveryPhrase");
          } else {
            console.log("Error", res);
          }
        }).catch((err) => { console.log("Error1", err); });
    } else {
      alert("Wrong Code");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 20, justifyContent: "space-between" }}>
        <View>
          <View style={{ marginTop: -10 }}>
            <TouchableOpacity
              style={{ paddingVertical: 12 }}
              onPress={() => {
                navigation.goBack();
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
            keyboardType="numeric"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(text) => { setCode(text); }}
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
                onPress={async () => {
                  await submit();
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
