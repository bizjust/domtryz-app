import {
  Alert,
  Dimensions,
  Image,
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
  Badge,
  Divider,
  Icon,
  Input,
  LinearProgress,
  ListItem,
  Overlay,
  Switch,
  Text,
} from "react-native-elements";
import BottomTabs from "../shared/BottomTabs";
const { width, height } = Dimensions.get("window");

export default function ReferralsDetails({ navigation }) {
  const referrals = [
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 1,
    },
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 2,
    },
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 3,
    },
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 2,
    },
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 3,
    },
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 3,
    },
    {
      name: "John Doe",
      date: "09 Feb 2022 04.20",
      status: 3,
    },
  ];

  const colors = [["#E466DF"]];

  const ReferralsList = () => {
    return referrals.map((r, i) => (
      <View
        key={i}
        style={{
          backgroundColor: "#FFF",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            width: 50,
            height: 50,
            backgroundColor: "#f6f6f6",
            borderRadius: 5,
          }}
        >
          <Avatar
            size="medium"
            title={
              <Text style={{ color: "#E466DF", fontWeight: "bold" }}>
                {r.name.charAt(0)}
              </Text>
            }
            onPress={() => console.log("Works!")}
            activeOpacity={1}
          />
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text h4>{r.name}</Text>
          <Text style={{ color: "#AAA" }}>{r.date}</Text>
          <View style={{ flexDirection: "row", paddingTop: 5 }}>
            <View
              style={[
                {
                  width: 60,
                  height: 10,
                  borderRadius: 50,
                  marginRight: 5,
                },
                r.status >= 1
                  ? { backgroundColor: "#E466DF" }
                  : { backgroundColor: "#CCC" },
              ]}
            ></View>
            <View
              style={[{
                width: 60,
                height: 10,
                borderRadius: 50,
                marginRight: 5,
              },r.status >= 2
                  ? { backgroundColor: "#FFD500" }
                  : { backgroundColor: "#CCC" },]}
            ></View>
            <View
              style={[{
                width: 60,
                height: 10,
                borderRadius: 50,
                marginRight: 5,
              },r.status >= 3
                  ? { backgroundColor: "#A1E367" }
                  : { backgroundColor: "#CCC" },]}
            ></View>
          </View>
        </View>
      </View>
    ));
  };

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
              Details
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text h4>Track Your Referrals</Text>
          <ReferralsList />
        </View>
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
      <BottomTabs navigation={navigation} activeTab="refer" />
    </View>
  );
}

const styles = StyleSheet.create({});
