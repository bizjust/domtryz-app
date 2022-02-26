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
    Switch,
    Text,
  } from "react-native-elements";
  const { width, height } = Dimensions.get("window");

export default function ReferFriend({ navigation }) {
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
              Refer a friend
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
      <Text>ReferFriend</Text>
    </View>
  )
}

const styles = StyleSheet.create({})