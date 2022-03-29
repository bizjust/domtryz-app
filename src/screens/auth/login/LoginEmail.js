import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon, Input, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { getLoggedInUser, loginWithEmail } from "../../../../http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/slicers/userSlice";

export default function LoginEmail({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const {data} = await getLoggedInUser();
      if(data.success)
      {
        const user = data.user;
        // console.log("user", uData.data.user);
        if(user.country_id > 0)
        {
          // console.log(user.verified);
          if(user.verified ==="Yes")
          {
            if(user.phrase !== "" && user.phrase !== null)
            {
              navigation.navigate("HomeScreen");
            }
            else
            {
              navigation.navigate("RegisterVerifyRecoveryPhrase");
            }
          }
          else
          {
            navigation.navigate("RegisterCode");
          }
        }
        else
        {
          setLoading(false);
        }
      }
      else
      {
        setLoading(false);
      }
    } catch (error) {
      // console.log("error", error);
      setLoading(false);
    }
  }, []);

  const submit = async () => {
    setErrorMsg("");
    // navigation.navigate("HomeScreen");
    try {
      const {data} = await loginWithEmail({email: email, password: password});
      if(data.success)
      {
        const token = data.token;
        const user = data.user;
        await AsyncStorage.setItem("token", token);
        dispatch(addUser(user));
        navigation.navigate("HomeScreen");
      }
      else
      {
        setErrorMsg(data.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      }
    } catch (error) {
      console.log("error", error);
      setErrorMsg("Unable to login. Please try again later.");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  };

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
            inputStyle={{ backgroundColor: "#e0e0e0", padding: 10 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(text) => { setEmail(text); }}
          />
          <Input
            label="Password"
            placeholder="Please enter your password"
            textContentType="password"
            secureTextEntry
            inputStyle={{ backgroundColor: "#e0e0e0", padding: 10 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(text) => { setPassword(text); }}
          />
          <TouchableOpacity>
            <Text style={{ color: "#e234e3", fontWeight: "bold" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', }}>{errorMsg}</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => {
                submit();
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
