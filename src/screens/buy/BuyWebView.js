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
  import { Avatar, Icon, Input, ListItem, Text } from "react-native-elements";
  const { width, height } = Dimensions.get("window");
  import { WebView } from 'react-native-webview';

export default function BuyWebView({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <StatusBar style="auto" backgroundColor={"#e234e3"} />
      <LinearGradient
        // Button Linear Gradient
        style={{ width: width, paddingVertical: 30, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#CCC' }}
        colors={["#FFF", "#FFF"]}
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
              navigation.navigate("BuyBTCSuccess", {amount: 42,});
            }}
          >
            <Text style={{ color: '#0099CC', }}>Done</Text>
          </TouchableOpacity>
          <View>
            <Text style={{ color: "#000", fontWeight: 'bold', }}>
              global.transak.com
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Icon type="material-community" name="refresh" color={"#0099CC"} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={{ flex:1, }}>
      <WebView 
        source={{ uri: 'https://global.transak.com?themeColor=000000' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})